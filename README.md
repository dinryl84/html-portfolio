1️⃣ Project Overview
Purpose:
 An offline, one-teacher-per-device class record app for Senior High School.
Records Written Works (WW), Performance Tasks (PT), and Quarterly Exams (QE)


Computes Weighted Grade and Transmuted Grade automatically


Supports 2 quarters only for SHS, then computes final grade


Freemium limit: max 25 students in free version


Designed using MVVM Architecture, Jetpack Compose, and Room Database
2️⃣ Color Palette & Theme Guide
Color Name (Custom)
Hex
Usage
Sunlight
#FBDB93
Primary background / highlight
Olive Gold
#BE5B50
Accent / buttons / selected states
Deep Rose
#8A2D3B
Header bars / strong accent
Maroon Shadow
#641B2E
Text titles / footer background


3️⃣ Folder Structure (MVVM + Room + Jetpack Compose)
css
CopyEdit
app/
 ├── data/
 │   ├── entity/
 │   │    ├── StudentEntity.kt
 │   │    ├── SectionEntity.kt
 │   │    ├── SubjectEntity.kt
 │   │    ├── ScoreEntity.kt
 │   │    ├── QuarterGradeEntity.kt
 │   ├── dao/
 │   │    ├── StudentDao.kt
 │   │    ├── SectionDao.kt
 │   │    ├── SubjectDao.kt
 │   │    ├── ScoreDao.kt
 │   │    ├── QuarterGradeDao.kt
 │   ├── AppDatabase.kt
 │   ├── repository/
 │        ├── StudentRepository.kt
 │        ├── SectionRepository.kt
 │        ├── SubjectRepository.kt
 │        ├── ScoreRepository.kt
 │        ├── GradeRepository.kt
 ├── ui/
 │   ├── theme/
 │   │    ├── Color.kt
 │   │    ├── Theme.kt
 │   ├── screens/
 │        ├── StudentManagementScreen.kt
 │        ├── SectionManagementScreen.kt
 │        ├── SubjectAssignmentScreen.kt
 │        ├── ScoreEntryScreen.kt
 │        ├── SummaryPerStudentScreen.kt
 │        ├── SummaryPerSectionScreen.kt
 │        ├── SettingsScreen.kt
 ├── viewmodel/
 │    ├── StudentViewModel.kt
 │    ├── SectionViewModel.kt
 │    ├── SubjectViewModel.kt
 │    ├── ScoreViewModel.kt
 │    ├── GradeViewModel.kt
 ├── MainActivity.kt


4️⃣ Database Schema & Relationships
Entities
StudentEntity
scss
CopyEdit
studentId (PK)
fullName
sectionId (FK -> SectionEntity.sectionId)

SectionEntity
scss
CopyEdit
sectionId (PK)
sectionName

SubjectEntity
scss
CopyEdit
subjectId (PK)
subjectName

ScoreEntity
scss
CopyEdit
scoreId (PK)
studentId (FK)
sectionId (FK)
subjectId (FK)
quarter (Int 1 or 2)
type ("WW", "PT", "QE")
itemNumber (1–10 for WW/PT, 1 for QE)
maxScore (Int)
rawScore (Int)

QuarterGradeEntity
scss
CopyEdit
gradeId (PK)
studentId (FK)
subjectId (FK)
quarter
wwAvg
ptAvg
qeAvg
weightedGrade
transmutedGrade

