# SonarQube and SonarScanner Setup Guide

## Prerequisites
Before running SonarQube and SonarScanner, ensure that the following dependencies are installed:

1. **Install Java**
   - Download and install Java (JDK) from [Oracle](https://www.oracle.com/java/technologies/javase-downloads.html) or [OpenJDK](https://openjdk.org/)
   - Verify the installation by running:
     ```sh
     java -version
     ```

2. **Install SonarQube**
   - Download SonarQube from [SonarQube Official Website](https://www.sonarsource.com/products/sonarqube/)
   - Extract the downloaded files to a desired location.
   - Navigate to the extracted folder and start SonarQube:
     ```sh
     cd <sonarqube-folder>/bin/<your-os>
     ./sonar.sh start  (For Linux/Mac)
     StartSonar.bat  (For Windows)
     ```
   - Access SonarQube at: [http://localhost:9000](http://localhost:9000)

3. **Install SonarScanner**
   - Download SonarScanner from [SonarScanner Official Website](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/)
   - Extract it to `D:\sonar-scanner\` or any preferred location.
   - Add the `bin` folder to the system environment `PATH`.
   - Verify the installation by running:
     ```sh
     sonar-scanner -h
     ```

## Running SonarQube and SonarScanner

1. **Start SonarQube**
   - Navigate to the SonarQube folder and run:
     ```sh
     cd <sonarqube-folder>/bin/<your-os>
     ./sonar.sh start  (For Linux/Mac)
     StartSonar.bat  (For Windows)
     ```
   - Ensure that SonarQube is running by accessing [http://localhost:9000](http://localhost:9000)

2. **Run SonarScanner to Scan Code**
   - Navigate to your project root directory and run the following command:
     ```sh
     D:\sonar-scanner\bin\sonar-scanner.bat \
     -D"sonar.projectKey=praticeProject" \
     -D"sonar.sources=." \
     -D"sonar.host.url=http://localhost:9000" \
     -D"sonar.token=sqp_fa13168494d564fa042bbbd8635bb59f0f00ba06"
     ```
   - This will scan the source code and send results to SonarQube.

## Access SonarQube Reports
- Open your browser and go to [http://localhost:9000](http://localhost:9000) to view the analysis results.
- Login with default credentials if required (username: `admin`, password: `admin`).

## Troubleshooting
- Ensure Java is installed and configured properly.
- Verify that SonarQube is running before executing the scanner.
- Check firewall or port conflicts if you cannot access SonarQube.

## Conclusion
By following these steps, you can successfully analyze your code quality using SonarQube and SonarScanner. For further customization, refer to the [SonarQube Documentation](https://docs.sonarqube.org/latest/).

## Video Guide
For a detailed walkthrough, watch this video tutorial
(https://drive.google.com/file/d/16Jj5u-Ip19wGaCkXq0GBHVQaDqZsrn6Z/view?usp=sharing)
You can watch the video by clicking the link below:
[Watch the Video](https://drive.google.com/file/d/16Jj5u-Ip19wGaCkXq0GBHVQaDqZsrn6Z/view?usp=sharing)


