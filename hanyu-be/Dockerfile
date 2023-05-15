FROM openjdk:oraclelinux8

COPY . /hanyu-app

WORKDIR /hanyu-app

ENTRYPOINT ["java", "-jar", "target/hanyu-be-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=dev"]