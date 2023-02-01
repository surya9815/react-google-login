pipeline {
    agent{label "linux"}
    options {
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '5', artifactDaysToKeepStr:'', numToKeepStr:'5')
        disableConcurrentBuilds()
    }
    stages {
        stage('Hello'){
            steps {
                echo "Hello"
            }
        }
    }
}