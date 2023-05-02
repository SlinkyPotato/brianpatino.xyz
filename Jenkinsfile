pipeline {
    agent any
    stages {
        stage("Build Docker Image") {
            steps {
                sh 'docker image build -t amaredeus/brianpatino.xyz:latest .'
                sh 'PROJECT_VERSION=$(cat package.json | jq -r ".version") \
                    && docker tag amaredeus/brianpatino.xyz:latest amaredeus/brianpatino.xyz:$PROJECT_VERSION'
            }
        }
        stage("Push Images to Docker") {
            environment {
                DOCKER_ACCESS_TOKEN = credentials('amaredeus-docker-token')
            }
            steps {
                sh 'echo ${DOCKER_ACCESS_TOKEN} | docker login -u amaredeus --password-stdin'
                sh 'docker push -a amaredeus/brianpatino.xyz'
            }
        }
        stage("Store Build") {
            steps {
                sh 'docker cp $(docker create amaredeus/brianpatino.xyz:latest):/app/build .'
                archiveArtifacts 'build/**'
            }
        }
        stage ("Deploy to Production") {
            environment {
                GRANITE_HOST_IP = credentials('granite-host-ip')
            }
            steps {
                sshagent(credentials: ['jenkins-ssh']) {
                    sh '''
                     ssh -o StrictHostKeychecking=no jenkins@${GRANITE_HOST_IP} rm -f /var/www/brianpatino/**
                     scp -o StrictHostKeychecking=no -r build/** jenkins@${GRANITE_HOST_IP}:/var/www/brianpatino/
                    '''
                }
            }
        }
    }
}
