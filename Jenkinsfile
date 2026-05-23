pipeline {
    agent any

    environment {
        IMAGE_NAME = "email-service"
        CONTAINER_NAME = "email-service-container"
        PORT = "3000"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/harikamekala222/Email-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME ."
            }
        }

        stage('Stop Old Container') {
            steps {
                sh """
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                """
            }
        }

        stage('Run Container') {
            steps {
                sh """
                docker run -d \
                --name $CONTAINER_NAME \
                -p $PORT:3000 \
                $IMAGE_NAME
                """
            }
        }
    }
}
