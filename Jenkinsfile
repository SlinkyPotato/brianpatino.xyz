pipeline {
    agent any
    environment {
        DOCKER_ACCESS_TOKEN = credentials('amaredeus-docker-token')
        GRANITE_HOST_IP = credentials('granite-host-ip')
        GH_TOKEN = credentials('gh-cli-jenkins-token')
    }
    stages {
        stage("Build Docker Image") {
            steps {
                script {
                    env.PROJECT_VERSION = sh(returnStdout: true, script: 'cat package.json | jq -r ".version"').trim()
                }
                sh 'docker image build -t amaredeus/brianpatino.xyz:latest .'
                sh 'docker tag amaredeus/brianpatino.xyz:latest amaredeus/brianpatino.xyz:${PROJECT_VERSION}'
            }
        }
        stage("Push Images to Docker") {
            steps {
                sh 'echo ${DOCKER_ACCESS_TOKEN} | docker login -u amaredeus --password-stdin'
                sh 'docker push -a amaredeus/brianpatino.xyz'
            }
            post {
                success {
                    sh 'docker cp $(docker create amaredeus/brianpatino.xyz:latest):/app/build .'
                    sh 'zip -r dist.zip build'
                    archiveArtifacts 'dist.zip'
                }
            }
        }
        stage ("Deploy to Production") {
            steps {
                sshagent(credentials: ['jenkins-ssh']) {
                    sh '''
                     ssh -o StrictHostKeychecking=no jenkins@${GRANITE_HOST_IP} rm -Rf /var/www/brianpatino/**
                     scp -o StrictHostKeychecking=no -r build/** jenkins@${GRANITE_HOST_IP}:/var/www/brianpatino/
                    '''
                }
            }
            post {
                success {
                    sh 'git fetch https://amaredeus:${GH_TOKEN}@github.com/amaredeus/brianpatino.xyz.git --tags --force'
                }
            }
        }
        stage ("Create Release") {
            when {
                allOf {
                    branch 'main'
                    expression {
                        GITHUB_PROJECT_TAG = sh(returnStdout: true, script: 'git tag -l ${PROJECT_VERSION}').trim();
                        return env.PROJECT_VERSION != GITHUB_PROJECT_TAG
                    }
                }
            }
            steps {
                sh 'git config --global user.email "patinobrian@gmail.com"'
                sh 'git config --global user.name "amaredeus"'
                sh 'git tag -a ${PROJECT_VERSION} -m "automated release with jenkins"'
                sh 'echo https://amaredeus:${GH_TOKEN}@github.com/amaredeus/brianpatino.xyz.git'
                sh 'git push https://amaredeus:${GH_TOKEN}@github.com/amaredeus/brianpatino.xyz.git ${PROJECT_VERSION}'
                sh 'gh release create ${PROJECT_VERSION} --generate-notes dist.zip'
            }
        }
    }
}
