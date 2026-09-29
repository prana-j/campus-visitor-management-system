# Campus Visitor Management System

## 1. Project Overview

The **Campus Visitor Management System** is a software system designed to manage and streamline the process of visitor registration, verification, approval, and entry within a campus.

The system provides a structured workflow for visitors, hosts, security personnel, and management staff. It helps manage visitor requests, host approvals, visitor verification, badge issuance, check-in/check-out, notifications, reporting, and security-related records.The system supports secure visitor registration and host approval.

This project is developed as part of the **Software Engineering (23CCE302)** course.

---

## 2. Objectives

The main objectives of the Campus Visitor Management System are:

* To provide a secure visitor registration process.
* To allow visitors to submit visit requests.
* To provide authentication for users such as hosts and security personnel.
* To allow hosts to view and manage visitor requests.
* To support visitor verification and ID submission.
* To manage visitor approval and badge issuance.
* To maintain visitor check-in and check-out records.
* To provide visitor statistics and reports.
* To support system administration and user management.
* To maintain security-related visitor activity records.

---

## 3. Main Features

### Visitor Registration

Visitors can register their details and submit a request to visit the campus.

### User Authentication

The system provides authentication for authorized users such as hosts and security personnel.

### Visit Request Management

Hosts can view pending visitor requests and manage the approval process.

### Visitor Verification

Visitor details and identification information can be submitted and verified before entry.

### Badge Issuance

Approved visitors can be provided with visitor badges for campus access.

### Notifications

The system supports notifications and visitor status updates during the visit process.

### Check-In and Check-Out

Security personnel can record visitor entry and exit at the campus entrance.

### Reporting

Management staff can access visitor statistics and reports for monitoring and analysis.

### System Administration

Administrators can manage user accounts, departments, and system data.

### Security Monitoring

Security-related visitor activities and logs can be maintained for monitoring purposes.

---

## 4. System Workflow

The general visitor management workflow is:

```text
Visitor Registration
        ↓
Visit Request Submission
        ↓
Host Review
        ↓
Host Approval / Rejection
        ↓
Visitor Verification
        ↓
Badge Issuance
        ↓
Visitor Check-In
        ↓
Campus Visit
        ↓
Visitor Check-Out
        ↓
Visitor Activity Record
```

---

## 5. User Roles

The system involves different users with different responsibilities.

### Visitor

* Register with the system.
* Submit visit requests.
* Provide required identification details.
* Receive visitor status information.

### Host

* Authenticate into the system.
* View pending visitor requests.
* Approve or reject visit requests.
* Manage visitor requests.

### Security Personnel

* Authenticate into the system.
* Verify visitor details.
* Verify visitor badges.
* Record visitor check-in and check-out.
* Monitor security-related visitor activities.

### Management Staff

* View visitor statistics.
* Access visitor reports.
* Monitor visitor activity.

### System Administrator

* Manage user accounts.
* Manage departments.
* Maintain system data.
* Manage backups and administrative functions.

---

## 6. Project Modules

The project is organized into the following major modules:

1. Visitor Registration
2. Authentication
3. Host Notification and Approval
4. Visitor Verification
5. Badge Issuance
6. Reporting
7. System Administration
8. Notifications
9. Check-In / Check-Out
10. Security Log Monitoring

---

## 7. Development Methodology

The project follows an **Agile/Scrum-based development approach**.

The work is divided into multiple sprints, with user stories and subtasks used to organize the development process.

The project consists of multiple epics covering visitor registration, authentication, host approval, reporting, system administration, visitor verification, badge issuance, notifications, and security-related functionality.

---

## 8. Team Members

| Name               | Register Number  |
| ------------------ | ---------------- |
| J V Pranavi        | CB.EN.U4CCE24118 |
| Kaviyavarshini B L | CB.EN.U4CCE24123 |
| Neehara Ajith      | CB.EN.U4CCE24133 |

---

## 9. Git/GitHub Workflow

Git and GitHub are used for version control and collaborative development.

The workflow followed by the team is:

```text
Create Repository
       ↓
Clone Repository
       ↓
Create / Modify Files
       ↓
git status
       ↓
git add
       ↓
git commit
       ↓
git push
       ↓
Create Feature Branch
       ↓
Develop Feature
       ↓
Push Feature Branch
       ↓
Merge Feature Branch
       ↓
Resolve Issues / Conflicts
       ↓
Final Version on main
```

The team uses separate branches for feature development to avoid directly modifying the `main` branch.

---

## 10. Branches

The repository uses the following branches during development:

* `main` – Main stable version of the project
* `feature/pranavi` – Feature development by J V Pranavi
* `feature/kavya` – Feature development by Kaviyavarshini B L
* `feature/neeha` – Feature development by Neehara Ajith
* `issue-1-visitor-search` – Branch created to resolve a GitHub Issue

---

## 11. Version Control Commands Demonstrated

The following Git commands are used in this project:

```bash
git clone
git status
git add
git commit
git push
git diff
git pull
git log
git branch
git switch
git merge
```

These commands are used to demonstrate repository creation, file tracking, version control, branch-based development, synchronization, merging, and conflict resolution.

---

## 12. GitHub Issue Management

GitHub Issues are used to identify and track improvements to the project.

Example issue:

**Improve Visitor Search Functionality**

The issue focuses on improving the visitor search process so that security personnel can quickly locate visitor information.

The issue is resolved through a separate branch and commit before being merged into the `main` branch.

---

## 13. Merge Conflict Demonstration

A real Git merge conflict is demonstrated as part of the project.

The conflict is created by having two contributors modify the same line of a file differently in separate branches.

The conflict is then:

1. Detected during merging.
2. Opened and inspected in the project file.
3. Resolved manually.
4. Staged using `git add`.
5. Committed using `git commit`.
6. Pushed to GitHub using `git push`.

This demonstrates the practical process of handling conflicts in collaborative Git development.

---

## 14. Project Outcome

The Campus Visitor Management System provides a structured approach for managing visitors from registration and approval through verification, badge issuance, check-in, campus visit, and check-out.

The project also demonstrates the use of Agile/Scrum practices and Git/GitHub-based collaborative development for managing a software engineering project.

---

## 15. Course Information

**Course:** Software Engineering
**Course Code:** 23CCE302
**Project:** Campus Visitor Management System
## Visitor Verification and Check-In

The Campus Visitor Management System supports visitor verification before campus entry. Security personnel can verify visitor details and record visitor check-in and check-out information as part of the visitor management process.

### Visitor Verification

Visitor details can be verified before allowing campus entry. This helps ensure that only approved and verified visitors are permitted to enter the campus.

### Check-In and Check-Out

Security personnel can record the visitor's entry and exit times. These records help maintain an accurate history of campus visitor activity.
