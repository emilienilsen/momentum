FROM maven:3.9.9-amazoncorretto-21-alpine AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:21-slim-buster
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 80
CMD ["java", "-jar", "app.jar"]
