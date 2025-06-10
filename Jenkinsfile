pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    environment {
        SONARQUBE_ENV = 'sonar'
        SONAR_TOKEN   = credentials('sonar-token')
    }

    stages {

        // ----------------------
        // CI: Clone, Test, Sonar
        // ----------------------
        stage('Clone') {
            steps {
                git url: 'https://github.com/widchayapon/nginx-node-test.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test with Coverage') {
            steps {
                sh 'npm test -- --coverage'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv("${SONARQUBE_ENV}") {
                    withEnv(["PATH+SONAR=${tool 'sonar-scanner'}/bin"]) {
                        sh '''
                            sonar-scanner \
                            -Dsonar.projectKey=nginx-node-test \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://sonarqube:9000 \
                            -Dsonar.token=$SONAR_TOKEN \
                            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                            -Dsonar.qualitygate.wait=true
                        '''
                    }
                }
            }
        }

        // ----------------------
        // Build image (local only)
        // ----------------------
        stage('Build Docker Image') {
            steps {
                // sh 'docker build -t nginx-node-test:latest .'
                sh '''
                    docker pull nginx-node-test:latest || true

                    docker build \
                    --cache-from=nginx-node-test:latest \
                    -t nginx-node-test:latest .
                '''
            }
        }

        // ----------------------
        // Deploy using local image
        // ----------------------
        stage('Deploy') {
            steps {
                sh '''
                    docker compose down --remove-orphans || true
                    docker compose up -d
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build success and deployed!'
        }
        failure {
            echo '❌ Build failed. Please check logs.'
        }
        always {
            echo '📦 Build finished (success or fail).'
        }
    }
}
