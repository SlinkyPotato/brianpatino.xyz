/* Requires the Docker Pipeline plugin */
pipeline {
    agent {
        docker {
            image 'node:16.16.0-alpine'
        }
    }
    stages {
        stage("Build Docker Image") {
            steps {
                sh 'docker image build -t amaredeus/brianpatino.xyz:latest .'
                sh 'PROJECT_VERSION=$(cat package.json | jq -r ".version")'
                sh 'docker tag amaredeus/brianpatino.xyz:latest amaredeus/brianpatino.xyz:${PROJECT_VERSION}'
            }
        }
        stage("Push Images to Docker") {
            steps {
                sh 'docker push -a amaredeus/brianpatino.xyz'
            }
        }
        stage("Store Build") {
            steps {
                sh 'docker cp $(docker create --name bp amaredeus/brianpatino.xyz:latest):/app/build .'
                archiveArtifacts 'build/**'
            }
        }
        stage ("Deploy to Production") {
            steps {
                sh 'echo "tbd"'
            }
        }
    }
}
