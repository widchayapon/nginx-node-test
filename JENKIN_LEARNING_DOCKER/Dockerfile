# # Base image
# FROM jenkins/jenkins:lts-jdk17

# USER root

# # ติดตั้ง dependencies
# RUN apt-get update && \
#     apt-get install -y \
#     git wget unzip curl bash ca-certificates gnupg lsb-release

# # ติดตั้ง Docker CLI ล่าสุด
# RUN curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg && \
#     echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian bullseye stable" > /etc/apt/sources.list.d/docker.list && \
#     apt-get update && \
#     apt-get install -y docker-ce-cli

# # ติดตั้ง Sonar Scanner
# RUN wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip && \
#     unzip sonar-scanner-cli-5.0.1.3006-linux.zip -d /opt && \
#     rm sonar-scanner-cli-5.0.1.3006-linux.zip

# # เพิ่ม PATH ไปยัง Sonar Scanner
# ENV PATH="/opt/sonar-scanner-5.0.1.3006-linux/bin:$PATH"

# USER jenkins
FROM jenkins/jenkins:lts-jdk17

USER root

# ติดตั้ง dependencies
RUN apt-get update && \
    apt-get install -y \
    git wget unzip curl bash ca-certificates gnupg lsb-release

# ติดตั้ง Docker CLI
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian bullseye stable" > /etc/apt/sources.list.d/docker.list && \
    apt-get update && \
    apt-get install -y docker-ce-cli

# # ✅ ติดตั้ง SonarScanner CLI เวอร์ชัน 6.2.1.4610 จาก GitHub (.zip)
# RUN curl -L -o /tmp/sonar-scanner.zip https://github.com/SonarSource/sonar-scanner-cli/releases/download/6.2.1.4610/sonar-scanner-cli-6.2.1.4610.zip && \
#     unzip /tmp/sonar-scanner.zip -d /opt && \
#     rm /tmp/sonar-scanner.zip

# # ✅ เพิ่ม PATH
# ENV PATH="/opt/sonar-scanner-6.2.1.4610/bin:$PATH"

USER jenkins