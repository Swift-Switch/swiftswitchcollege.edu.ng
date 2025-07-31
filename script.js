<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swift Switch College - Advanced JavaScript Management System</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }

        .nav-tabs {
            display: flex;
            background: #f8fafc;
            border-bottom: 1px solid #e5e7eb;
            overflow-x: auto;
        }

        .nav-tab {
            padding: 20px 30px;
            background: none;
            border: none;
            font-size: 1rem;
            font-weight: 600;
            color: #6b7280;
            cursor: pointer;
            transition: all 0.3s ease;
            white-space: nowrap;
            border-bottom: 3px solid transparent;
        }

        .nav-tab:hover {
            color: #4f46e5;
            background: #f3f4f6;
        }

        .nav-tab.active {
            color: #4f46e5;
            background: white;
            border-bottom-color: #4f46e5;
        }

        .tab-content {
            display: none;
            padding: 30px;
            min-height: 600px;
        }

        .tab-content.active {
            display: block;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 15px;
        }

        .section-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: #1f2937;
        }

        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
            font-size: 1rem;
        }

        .btn-primary {
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);
        }

        .btn-secondary {
            background: #f3f4f6;
            color: #374151;
        }

        .btn-secondary:hover {
            background: #e5e7eb;
        }

        .btn-success {
            background: #10b981;
            color: white;
        }

        .btn-success:hover {
            background: #059669;
        }

        .btn-danger {
            background: #ef4444;
            color: white;
        }

        .btn-danger:hover {
            background: #dc2626;
        }

        .btn-warning {
            background: #f59e0b;
            color: white;
        }

        .btn-warning:hover {
            background: #d97706;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .stat-card {
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: white;
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            transition: transform 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
        }

        .stat-card.green {
            background: linear-gradient(135deg, #10b981, #047857);
        }

        .stat-card.orange {
            background: linear-gradient(135deg, #f59e0b, #d97706);
        }

        .stat-card.red {
            background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 10px;
            display: block;
        }

        .stat-label {
            font-size: 1rem;
            opacity: 0.9;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            font-weight: 600;
            color: #374151;
            margin-bottom: 8px;
        }

        .form-input,
        .form-select,
        .form-textarea {
            width: 100%;
            padding: 15px;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: white;
            font-family: inherit;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
            outline: none;
            border-color: #4f46e5;
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .form-textarea {
            resize: vertical;
            min-height: 120px;
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .data-table th,
        .data-table td {
            padding: 15px 20px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }

        .data-table th {
            background: #f8fafc;
            font-weight: 600;
            color: #374151;
        }

        .data-table tr:hover {
            background: #f8fafc;
        }

        .data-table tr:last-child td {
            border-bottom: none;
        }

        .badge {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
        }

        .badge-success {
            background: #dcfce7;
            color: #166534;
        }

        .badge-warning {
            background: #fef3c7;
            color: #92400e;
        }

        .badge-danger {
            background: #fee2e2;
            color: #991b1b;
        }

        .badge-info {
            background: #dbeafe;
            color: #1e40af;
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: white;
            border-radius: 20px;
            max-width: 600px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
        }

        .modal-header {
            padding: 30px 30px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .modal-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: #1f2937;
        }

        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #6b7280;
            padding: 5px;
            border-radius: 5px;
            transition: all 0.3s ease;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-close:hover {
            background: #f3f4f6;
            color: #1f2937;
        }

        .modal-body {
            padding: 30px;
        }

        .search-filter-bar {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .search-input {
            flex: 1;
            min-width: 250px;
            padding: 12px 20px;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            font-size: 1rem;
        }

        .search-input:focus {
            outline: none;
            border-color: #4f46e5;
        }

        .filter-select {
            padding: 12px 20px;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            font-size: 1rem;
            background: white;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: #e5e7eb;
            border-radius: 4px;
            overflow: hidden;
            margin-top: 10px;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            transition: width 0.3s ease;
        }

        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            z-index: 2000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        }

        .notification.show {
            transform: translateX(0);
        }

        .notification.success {
            background: #10b981;
        }

        .notification.error {
            background: #ef4444;
        }

        .notification.warning {
            background: #f59e0b;
        }

        .notification.info {
            background: #3b82f6;
        }

        .loading {
            opacity: 0.7;
            pointer-events: none;
            position: relative;
        }

        .loading::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin: -10px 0 0 -10px;
            border: 2px solid #4f46e5;
            border-top: 2px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .chart-container {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
        }

        .chart {
            width: 100%;
            height: 300px;
            background: #f8fafc;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6b7280;
            font-size: 1.1rem;
        }

        @media (max-width: 768px) {
            .container {
                margin: 0;
                border-radius: 0;
            }

            .header {
                padding: 20px;
            }

            .header h1 {
                font-size: 2rem;
            }

            .nav-tabs {
                flex-wrap: wrap;
            }

            .nav-tab {
                padding: 15px 20px;
            }

            .tab-content {
                padding: 20px;
            }

            .section-header {
                flex-direction: column;
                align-items: stretch;
                text-align: center;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .form-grid {
                grid-template-columns: 1fr;
            }

            .search-filter-bar {
                flex-direction: column;
            }

            .search-input {
                min-width: auto;
            }

            .data-table {
                font-size: 0.9rem;
            }

            .data-table th,
            .data-table td {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Swift Switch College</h1>
            <p>Advanced JavaScript Management System</p>
        </div>

        <div class="nav-tabs">
            <button class="nav-tab active" onclick="switchTab('dashboard')">📊 Dashboard</button>
            <button class="nav-tab" onclick="switchTab('students')">👨‍🎓 Students</button>
            <button class="nav-tab" onclick="switchTab('courses')">📚 Courses</button>
            <button class="nav-tab" onclick="switchTab('grades')">📝 Grades</button>
            <button class="nav-tab" onclick="switchTab('attendance')">📅 Attendance</button>
            <button class="nav-tab" onclick="switchTab('reports')">📈 Reports</button>
            <button class="nav-tab" onclick="switchTab('calculator')">🧮 GPA Calculator</button>
        </div>

        <!-- Dashboard Tab -->
        <div id="dashboard" class="tab-content active">
            <div class="section-header">
                <h2 class="section-title">Dashboard Overview</h2>
                <button class="btn btn-primary" onclick="refreshDashboard()">🔄 Refresh Data</button>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number" id="total-students">0</span>
                    <span class="stat-label">Total Students</span>
                </div>
                <div class="stat-card green">
                    <span class="stat-number" id="total-courses">0</span>
                    <span class="stat-label">Active Courses</span>
                </div>
                <div class="stat-card orange">
                    <span class="stat-number" id="avg-gpa">0.0</span>
                    <span class="stat-label">Average GPA</span>
                </div>
                <div class="stat-card red">
                    <span class="stat-number" id="attendance-rate">0%</span>
                    <span class="stat-label">Attendance Rate</span>
                </div>
            </div>

            <div class="chart-container">
                <h3 style="margin-bottom: 20px; color: #1f2937; font-weight: 600;">Student Performance Trends</h3>
                <div class="chart" id="performance-chart">
                    📈 Interactive Chart - Performance data visualization would appear here
                </div>
            </div>

            <div class="chart-container">
                <h3 style="margin-bottom: 20px; color: #1f2937; font-weight: 600;">Recent Activities</h3>
                <div id="recent-activities">
                    <!-- Activities will be populated by JavaScript -->
                </div>
            </div>
        </div>

        <!-- Students Tab -->
        <div id="students" class="tab-content">
            <div class="section-header">
                <h2 class="section-title">Student Management</h2>
                <button class="btn btn-primary" onclick="openModal('student-modal')">➕ Add Student</button>
            </div>

            <div class="search-filter-bar">
                <input type="text" class="search-input" id="student-search" placeholder="🔍 Search students..." onkeyup="searchStudents()">
                <select class="filter-select" id="student-filter" onchange="filterStudents()">
                    <option value="">All Programs</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                </select>
                <button class="btn btn-secondary" onclick="exportStudents()">📥 Export</button>
            </div>

            <table class="data-table">
                <thead>
                    <tr>
                        <th onclick="sortTable('students-table', 0)">ID 📊</th>
                        <th onclick="sortTable('students-table', 1)">Name 📊</th>
                        <th onclick="sortTable('students-table', 2)">Email 📊</th>
                        <th onclick="sortTable('students-table', 3)">Program 📊</th>
                        <th onclick="sortTable('students-table', 4)">GPA 📊</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="students-table">
                    <!-- Students will be populated by JavaScript -->
                </tbody>
            </table>
        </div>

        <!-- Courses Tab -->
        <div id="courses" class="tab-content">
            <div class="section-header">
                <h2 class="section-title">Course Management</h2>
                <button class="btn btn-primary" onclick="openModal('course-modal')">➕ Add Course</button>
            </div>

            <div class="search-filter-bar">
                <input type="text" class="search-input" id="course-search" placeholder="🔍 Search courses..." onkeyup="searchCourses()">
                <select class="filter-select" id="course-filter" onchange="filterCourses()">
                    <option value="">All Departments</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Business">Business</option>
                </select>
            </div>

            <table class="data-table">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Course Name</th>
                        <th>Instructor</th>
                        <th>Students</th>
                        <th>Credits</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="courses-table">
                    <!-- Courses will be populated by JavaScript -->
                </tbody>
            </table>
        </div>

        <!-- Grades Tab -->
        <div id="grades" class="tab-content">
            <div class="section-header">
                <h2 class="section-title">Grade Management</h2>
                <button class="btn btn-primary" onclick="openModal('grade-modal')">➕ Add Grade</button>
            </div>

            <div class="search-filter-bar">
                <input type="text" class="search-input" id="grade-search" placeholder="🔍 Search grades..." onkeyup="searchGrades()">
                <select class="filter-select" id="grade-filter" onchange="filterGrades()">
                    <option value="">All Grades</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
            </div>

            <table class="data-table">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Course</th>
                        <th>Assignment</th>
                        <th>Grade</th>
                        <th>Points</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="grades-table">
                    <!-- Grades will be populated by JavaScript -->
                </tbody>
            </table>
        </div>

        <!-- Attendance Tab -->
        <div id="attendance" class="tab-content">
            <div class="section-header">
                <h2 class="section-title">Attendance Tracking</h2>
                <button class="btn btn-primary" onclick="openModal('attendance-modal')">➕ Record Attendance</button>
            </div>

            <div class="form-grid">
                <div>
                    <label class="form-label">Select Date</label>
                    <input type="date" class="form-input" id="attendance-date" onchange="loadAttendance()">
                </div>
                <div>
                    <label class="form-label">Select Course</label>
                    <select class="form-select" id="attendance-course" onchange="loadAttendance()">
                        <option value="">All Courses</option>
                    </select>
                </div>
            </div>

            <table class="data-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Course</th>
                        <th>Student</th>
                        <th>Status</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="attendance-table">
                    <!-- Attendance will be populated by JavaScript -->
                </tbody>
            </table>
        </div>

        <!-- Reports Tab -->
        <div id="reports" class="tab-content">
            <div class="section-header">
                <h2 class="section-title">Reports & Analytics</h2>
                <button class="btn btn-primary" onclick="generateReport()">📊 Generate Report</button>
            </div>

            <div class="form-grid">
                <div>
                    <label class="form-label">Report Type</label>
                    <select class="form-select" id="report-type">
                        <option value="student-performance">Student Performance</option>
                        <option value="course-analytics">Course Analytics</option>
                        <option value="attendance-summary">Attendance Summary</option>
                        <option value="grade-distribution">Grade Distribution</option>
                    </select>
                </div>
                <div>
                    <label class="form-label">Date Range</label>
                    <select class="form-select" id="report-range">
                        <option value="this-month">This Month</option>
                        <option value="last-month">Last Month</option>
                        <option value="this-semester">This Semester</option>
                        <option value="this-year">This Year</option>
                    </select>
                </div>
            </div>

            <div class="chart-container">
                <h3 style="margin-bottom: 20px; color: #1f2937; font-weight: 600;">Report Visualization</h3>
                <div class="chart" id="report-chart">
                    📈 Report data will be displayed here after generation
                </div>
            </div>

            <div id="report-data">
                <!-- Report data will be populated by JavaScript -->
            </div>
        </div>

        <!-- GPA Calculator Tab -->
        <div id="calculator" class="tab-content">
            <div class="section-header">
                <h2 class="section-title">GPA Calculator</h2>
                <button class="btn btn-secondary" onclick="clearCalculator()">🗑️ Clear All</button>
            </div>

            <div class="form-grid">
                <div>
                    <label class="form-label">Course Name</label>
                    <input type="text" class="form-input" id="calc-course" placeholder="Enter course name">
                </div>
                <div>
                    <label class="form-label">Grade</label>
                    <select class="form-select" id="calc-grade">
                        <option value="">Select Grade</option>
                        <option value="4.0">A (4.0)</option>
                        <option value="3.7">A- (3.7)</option>
                        <option value="3.3">B+ (3.3)</option>
                        <option value="3.0">B (3.0)</option>
                        <option value="2.7">B- (2.7)</option>
                        <option value="2.3">C+ (2.3)</option>
                        <option value="2.0">C (2.0)</option>
                        <option value="1.7">C- (1.7)</option>
                        <option value="1.3">D+ (1.3)</option>
                        <option value="1.0">D (1.0)</option>
                        <option value="0.0">F (0.0)</option>
                    </select>
                </div>
                <div>
                    <label class="form-label">Credit Hours</label>
                    <input type="number" class="form-input" id="calc-credits" placeholder="Enter credits" min="1" max="6">
                </div>
                <div style="display: flex; align-items: end;">
                    <button class="btn btn-primary" onclick="addCourseToCalculator()" style="width: 100%;">➕ Add Course</button>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number" id="total-credits">0</span>
                    <span class="stat-label">Total Credits</span>
                </div>
                <div class="stat-card green">
                    <span class="stat-number" id="total-points">0.0</span>
                    <span class="stat-label">Total Points</span>
                </div>
                <div class="stat-card orange">
                    <span class="stat-number" id="calculated-gpa">0.00</span>
                    <span class="stat-label">Calculated GPA</span>
                </div>
                <div class="stat-card red">
                    <span class="stat-number" id="courses-count">0</span>
                    <span class="stat-label">Courses Added</span>
                </div>
            </div>

            <table class="data-table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Credits</th>
                        <th>Points</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="calculator-table">
                    <!-- Calculator courses will be populated by JavaScript -->
                </tbody>
            </table>
        </div>
    </div>

    <!-- Student Modal -->
    <div id="student-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Add New Student</h2>
                <button class="modal-close" onclick="closeModal('student-modal')">×</button>
            </div>
            <div class="modal-body">
                <form id="student-form" onsubmit="addStudent(event)">
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label">First Name *</label>
                            <input type="text" class="form-input" name="firstName" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Last Name *</label>
                            <input type="text" class="form-input" name="lastName" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email *</label>
                            <input type="email" class="form-input" name="email" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone</label>
                            <input type="tel" class="form-input" name="phone">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Program *</label>
                            <select class="form-select" name="program" required>
                                <option value="">Select Program</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Data Analytics">Data Analytics</option>
                                <option value="Cybersecurity">Cybersecurity</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Enrollment Date</label>
                            <input type="date" class="form-input" name="enrollmentDate">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Address</label>
                        <textarea class="form-textarea" name="address" placeholder="Enter full address"></textarea>
                    </div>
                    <div style="display: flex; gap: 15px; margin-top: 30px;">
                        <button type="button" class="btn btn-secondary" onclick="closeModal('student-modal')" style="flex: 1;">Cancel</button>
                        <button type="submit" class="btn btn-primary" style="flex: 1;">Add Student</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Course Modal -->
    <div id="course-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Add New Course</h2>
                <button class="modal-close" onclick="closeModal('course-modal')">×</button>
            </div>
            <div class="modal-body">
                <form id="course-form" onsubmit="addCourse(event)">
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label">Course Code *</label>
                            <input type="text" class="form-input" name="code" required placeholder="e.g., CS101">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Course Name *</label>
                            <input type="text" class="form-input" name="name" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Instructor *</label>
                            <input type="text" class="form-input" name="instructor" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Credits *</label>
                            <input type="number" class="form-input" name="credits" required min="1" max="6">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Department</label>
                            <select class="form-select" name="department">
                                <option value="">Select Department</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Business">Business</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Capacity</label>
                            <input type="number" class="form-input" name="capacity" min="1" placeholder="Max students">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Description</label>
                        <textarea class="form-textarea" name="description" placeholder="Course description"></textarea>
                    </div>
                    <div style="display: flex; gap: 15px; margin-top: 30px;">
                        <button type="button" class="btn btn-secondary" onclick="closeModal('course-modal')" style="flex: 1;">Cancel</button>
                        <button type="submit" class="btn btn-primary" style="flex: 1;">Add Course</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Grade Modal -->
    <div id="grade-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Add Grade</h2>
                <button class="modal-close" onclick="closeModal('grade-modal')">×</button>
            </div>
            <div class="modal-body">
                <form id="grade-form" onsubmit="addGrade(event)">
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label">Student *</label>
                            <select class="form-select" name="student" required id="grade-student-select">
                                <option value="">Select Student</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Course *</label>
                            <select class="form-select" name="course" required id="grade-course-select">
                                <option value="">Select Course</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Assignment *</label>
                            <input type="text" class="form-input" name="assignment" required placeholder="Assignment name">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Grade *</label>
                            <select class="form-select" name="grade" required>
                                <option value="">Select Grade</option>
                                <option value="A">A (90-100)</option>
                                <option value="B">B (80-89)</option>
                                <option value="C">C (70-79)</option>
                                <option value="D">D (60-69)</option>
                                <option value="F">F (Below 60)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Points</label>
                            <input type="number" class="form-input" name="points" min="0" max="100" placeholder="Points earned">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Max Points</label>
                            <input type="number" class="form-input" name="maxPoints" min="1" placeholder="Total points possible">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Comments</label>
                        <textarea class="form-textarea" name="comments" placeholder="Additional comments"></textarea>
                    </div>
                    <div style="display: flex; gap: 15px; margin-top: 30px;">
                        <button type="button" class="btn btn-secondary" onclick="closeModal('grade-modal')" style="flex: 1;">Cancel</button>
                        <button type="submit" class="btn btn-primary" style="flex: 1;">Add Grade</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Attendance Modal -->
    <div id="attendance-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Record Attendance</h2>
                <button class="modal-close" onclick="closeModal('attendance-modal')">×</button>
            </div>
            <div class="modal-body">
                <form id="attendance-form" onsubmit="recordAttendance(event)">
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label">Date *</label>
                            <input type="date" class="form-input" name="date" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Course *</label>
                            <select class="form-select" name="course" required id="attendance-course-select">
                                <option value="">Select Course</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Students</label>
                        <div id="attendance-students" style="max-height: 300px; overflow-y: auto; border: 1px solid #e5e7eb; border-radius: 10px; padding: 15px;">
                            <!-- Students will be populated dynamically -->
                        </div>
                    </div>
                    <div style="display: flex; gap: 15px; margin-top: 30px;">
                        <button type="button" class="btn btn-secondary" onclick="closeModal('attendance-modal')" style="flex: 1;">Cancel</button>
                        <button type="submit" class="btn btn-primary" style="flex: 1;">Record Attendance</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script>
        // ===== GLOBAL VARIABLES =====
        let students = [];
        let courses = [];
        let grades = [];
        let attendance = [];
        let calculatorCourses = [];
        let currentSortColumn = -1;
        let currentSortDirection = 'asc';

        // ===== INITIALIZATION =====
        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
        });

        function initializeApp() {
            loadSampleData();
            updateDashboard();
            populateDropdowns();
            setDefaultDates();
            showNotification('Welcome to Swift Switch College Management System!', 'success');
        }

        // ===== SAMPLE DATA =====
        function loadSampleData() {
            students = [
                {
                    id: 'STU001',
                    firstName: 'John',
                    lastName: 'Smith',
                    email: 'john.smith@email.com',
                    phone: '(555) 123-4567',
                    program: 'Computer Science',
                    enrollmentDate: '2023-09-01',
                    address: '123 Main St, City, State 12345',
                    gpa: 3.8,
                    status: 'Active'
                },
                {
                    id: 'STU002',
                    firstName: 'Sarah',
                    lastName: 'Wilson',
                    email: 'sarah.wilson@email.com',
                    phone: '(555) 234-5678',
                    program: 'Web Development',
                    enrollmentDate: '2023-09-01',
                    address: '456 Oak Ave, City, State 12345',
                    gpa: 3.6,
                    status: 'Active'
                },
                {
                    id: 'STU003',
                    firstName: 'Mike',
                    lastName: 'Johnson',
                    email: 'mike.johnson@email.com',
                    phone: '(555) 345-6789',
                    program: 'Data Analytics',
                    enrollmentDate: '2023-09-01',
                    address: '789 Pine Rd, City, State 12345',
                    gpa: 3.4,
                    status: 'Active'
                },
                {
                    id: 'STU004',
                    firstName: 'Emily',
                    lastName: 'Davis',
                    email: 'emily.davis@email.com',
                    phone: '(555) 456-7890',
                    program: 'Cybersecurity',
                    enrollmentDate: '2023-09-01',
                    address: '321 Elm St, City, State 12345',
                    gpa: 3.9,
                    status: 'Active'
                }
            ];

            courses = [
                {
                    code: 'CS101',
                    name: 'Introduction to Programming',
                    instructor: 'Prof. Anderson',
                    credits: 3,
                    department: 'Computer Science',
                    capacity: 30,
                    enrolled: 25,
                    description: 'Basic programming concepts and problem-solving techniques.',
                    status: 'Active'
                },
                {
                    code: 'WD201',
                    name: 'Advanced Web Development',
                    instructor: 'Dr. Martinez',
                    credits: 4,
                    department: 'Computer Science',
                    capacity: 25,
                    enrolled: 20,
                    description: 'Advanced web technologies including frameworks and APIs.',
                    status: 'Active'
                },
                {
                    code: 'DA301',
                    name: 'Data Visualization',
                    instructor: 'Prof. Thompson',
                    credits: 3,
                    department: 'Computer Science',
                    capacity: 20,
                    enrolled: 18,
                    description: 'Creating effective data visualizations and dashboards.',
                    status: 'Active'
                }
            ];

            grades = [
                {
                    student: 'John Smith',
                    course: 'CS101',
                    assignment: 'Midterm Exam',
                    grade: 'A',
                    points: 95,
                    maxPoints: 100,
                    date: '2024-01-15',
                    comments: 'Excellent understanding of concepts'
                },
                {
                    student: 'Sarah Wilson',
                    course: 'WD201',
                    assignment: 'Portfolio Project',
                    grade: 'B',
                    points: 85,
                    maxPoints: 100,
                    date: '2024-01-14',
                    comments: 'Good work, needs improvement in responsive design'
                },
                {
                    student: 'Mike Johnson',
                    course: 'DA301',
                    assignment: 'Data Analysis Report',
                    grade: 'B',
                    points: 82,
                    maxPoints: 100,
                    date: '2024-01-13',
                    comments: 'Solid analysis, could use better visualization'
                }
            ];

            attendance = [
                {
                    date: '2024-01-15',
                    course: 'CS101',
                    student: 'John Smith',
                    status: 'Present',
                    time: '09:00 AM'
                },
                {
                    date: '2024-01-15',
                    course: 'CS101',
                    student: 'Sarah Wilson',
                    status: 'Present',
                    time: '09:00 AM'
                },
                {
                    date: '2024-01-15',
                    course: 'WD201',
                    student: 'Mike Johnson',
                    status: 'Absent',
                    time: '-'
                }
            ];
        }

        // ===== TAB MANAGEMENT =====
        function switchTab(tabName) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });

            // Remove active class from all nav tabs
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });

            // Show selected tab content
            document.getElementById(tabName).classList.add('active');

            // Add active class to clicked nav tab
            event.target.classList.add('active');

            // Load data for specific tabs
            switch(tabName) {
                case 'students':
                    renderStudentsTable();
                    break;
                case 'courses':
                    renderCoursesTable();
                    break;
                case 'grades':
                    renderGradesTable();
                    break;
                case 'attendance':
                    renderAttendanceTable();
                    break;
                case 'dashboard':
                    updateDashboard();
                    break;
            }
        }

        // ===== DASHBOARD FUNCTIONS =====
        function updateDashboard() {
            // Update statistics
            document.getElementById('total-students').textContent = students.length;
            document.getElementById('total-courses').textContent = courses.length;
            
            const avgGPA = students.reduce((sum, student) => sum + student.gpa, 0) / students.length;
            document.getElementById('avg-gpa').textContent = avgGPA.toFixed(1);
            
            const attendanceRate = calculateAttendanceRate();
            document.getElementById('attendance-rate').textContent = attendanceRate + '%';

            // Update recent activities
            updateRecentActivities();

            // Animate counters
            animateCounters();
        }

        function calculateAttendanceRate() {
            if (attendance.length === 0) return 0;
            const presentCount = attendance.filter(record => record.status === 'Present').length;
            return Math.round((presentCount / attendance.length) * 100);
        }

        function updateRecentActivities() {
            const activitiesContainer = document.getElementById('recent-activities');
            const recentActivities = [
                { time: '10:30 AM', activity: 'New student enrolled', user: 'John Smith', status: 'success' },
                { time: '09:15 AM', activity: 'Grade submitted', user: 'Prof. Anderson', status: 'info' },
                { time: '08:45 AM', activity: 'Course updated', user: 'Dr. Martinez', status: 'warning' }
            ];

            let html = '<table class="data-table"><thead><tr><th>Time</th><th>Activity</th><th>User</th><th>Status</th></tr></thead><tbody>';
            
            recentActivities.forEach(activity => {
                html += `
                    <tr>
                        <td>${activity.time}</td>
                        <td>${activity.activity}</td>
                        <td>${activity.user}</td>
                        <td><span class="badge badge-${activity.status}">${activity.status}</span></td>
                    </tr>
                `;
            });
            
            html += '</tbody></table>';
            activitiesContainer.innerHTML = html;
        }

        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseFloat(counter.textContent);
                const increment = target / 50;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target % 1 === 0 ? target : target.toFixed(1);
                        clearInterval(timer);
                    } else {
                        counter.textContent = current % 1 === 0 ? Math.floor(current) : current.toFixed(1);
                    }
                }, 20);
            });
        }

        function refreshDashboard() {
            const button = event.target;
            button.classList.add('loading');
            button.textContent = '🔄 Refreshing...';
            
            setTimeout(() => {
                updateDashboard();
                button.classList.remove('loading');
                button.textContent = '🔄 Refresh Data';
                showNotification('Dashboard refreshed successfully!', 'success');
            }, 2000);
        }

        // ===== STUDENT MANAGEMENT =====
        function renderStudentsTable() {
            const tableBody = document.getElementById('students-table');
            let html = '';

            students.forEach(student => {
                html += `
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.firstName} ${student.lastName}</td>
                        <td>${student.email}</td>
                        <td>${student.program}</td>
                        <td>${student.gpa.toFixed(1)}</td>
                        <td><span class="badge badge-success">${student.status}</span></td>
                        <td>
                            <button class="btn btn-success" onclick="viewStudent('${student.id}')" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">👁️ View</button>
                            <button class="btn btn-warning" onclick="editStudent('${student.id}')" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">✏️ Edit</button>
                            <button class="btn btn-danger" onclick="deleteStudent('${student.id}')" style="padding: 6px 12px; font-size: 0.9rem;">🗑️ Delete</button>
                        </td>
                    </tr>
                `;
            });

            tableBody.innerHTML = html;
        }

        function addStudent(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const newStudent = {
                id: 'STU' + String(students.length + 1).padStart(3, '0'),
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone') || 'N/A',
                program: formData.get('program'),
                enrollmentDate: formData.get('enrollmentDate') || new Date().toISOString().split('T')[0],
                address: formData.get('address') || 'N/A',
                gpa: (Math.random() * 2 + 2).toFixed(1), // Random GPA between 2.0-4.0
                status: 'Active'
            };

            // Simulate loading
            const submitBtn = event.target.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');
            submitBtn.textContent = 'Adding...';

            setTimeout(() => {
                students.push(newStudent);
                renderStudentsTable();
                updateDashboard();
                populateDropdowns();
                closeModal('student-modal');
                event.target.reset();
                
                submitBtn.classList.remove('loading');
                submitBtn.textContent = 'Add Student';
                
                showNotification(`Student ${newStudent.firstName} ${newStudent.lastName} added successfully!`, 'success');
            }, 1500);
        }

        function viewStudent(studentId) {
            const student = students.find(s => s.id === studentId);
            if (student) {
                alert(`Student Details:\n\nID: ${student.id}\nName: ${student.firstName} ${student.lastName}\nEmail: ${student.email}\nProgram: ${student.program}\nGPA: ${student.gpa}\nStatus: ${student.status}`);
            }
        }

        function editStudent(studentId) {
            showNotification('Edit functionality would open a modal with student data pre-filled', 'info');
        }

        function deleteStudent(studentId) {
            if (confirm('Are you sure you want to delete this student?')) {
                const index = students.findIndex(s => s.id === studentId);
                if (index > -1) {
                    const student = students[index];
                    students.splice(index, 1);
                    renderStudentsTable();
                    updateDashboard();
                    showNotification(`Student ${student.firstName} ${student.lastName} deleted successfully!`, 'success');
                }
            }
        }

        function searchStudents() {
            const searchTerm = document.getElementById('student-search').value.toLowerCase();
            const filteredStudents = students.filter(student => 
                student.firstName.toLowerCase().includes(searchTerm) ||
                student.lastName.toLowerCase().includes(searchTerm) ||
                student.email.toLowerCase().includes(searchTerm) ||
                student.program.toLowerCase().includes(searchTerm)
            );
            renderFilteredStudents(filteredStudents);
        }

        function filterStudents() {
            const filterValue = document.getElementById('student-filter').value;
            const filteredStudents = filterValue ? 
                students.filter(student => student.program === filterValue) : 
                students;
            renderFilteredStudents(filteredStudents);
        }

        function renderFilteredStudents(filteredStudents) {
            const tableBody = document.getElementById('students-table');
            let html = '';

            filteredStudents.forEach(student => {
                html += `
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.firstName} ${student.lastName}</td>
                        <td>${student.email}</td>
                        <td>${student.program}</td>
                        <td>${student.gpa.toFixed(1)}</td>
                        <td><span class="badge badge-success">${student.status}</span></td>
                        <td>
                            <button class="btn btn-success" onclick="viewStudent('${student.id}')" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">👁️ View</button>
                            <button class="btn btn-warning" onclick="editStudent('${student.id}')" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">✏️ Edit</button>
                            <button class="btn btn-danger" onclick="deleteStudent('${student.id}')" style="padding: 6px 12px; font-size: 0.9rem;">🗑️ Delete</button>
                        </td>
                    </tr>
                `;
            });

            tableBody.innerHTML = html;
        }

        function exportStudents() {
            const csvContent = "data:text/csv;charset=utf-8," + 
                "ID,Name,Email,Program,GPA,Status\n" +
                students.map(s => `${s.id},"${s.firstName} ${s.lastName}",${s.email},${s.program},${s.gpa},${s.status}`).join("\n");
            
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "students_export.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showNotification('Students data exported successfully!', 'success');
        }

        // ===== COURSE MANAGEMENT =====
        function renderCoursesTable() {
            const tableBody = document.getElementById('courses-table');
            let html = '';

            courses.forEach(course => {
                html += `
                    <tr>
                        <td>${course.code}</td>
                        <td>${course.name}</td>
                        <td>${course.instructor}</td>
                        <td>${course.enrolled}/${course.capacity}</td>
                        <td>${course.credits}</td>
                        <td><span class="badge badge-success">${course.status}</span></td>
                        <td>
                            <button class="btn btn-success" onclick="viewCourse('${course.code}')" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">👁️ View</button>
                            <button class="btn btn-warning" onclick="editCourse('${course.code}')" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">✏️ Edit</button>
                            <button class="btn btn-danger" onclick="deleteCourse('${course.code}')" style="padding: 6px 12px; font-size: 0.9rem;">🗑️ Delete</button>
                        </td>
                    </tr>
                `;
            });

            tableBody.innerHTML = html;
        }

        function addCourse(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const newCourse = {
                code: formData.get('code').toUpperCase(),
                name: formData.get('name'),
                instructor: formData.get('instructor'),
                credits: parseInt(formData.get('credits')),
                department: formData.get('department') || 'General',
                capacity: parseInt(formData.get('capacity')) || 30,
                enrolled: 0,
                description: formData.get('description') || 'No description provided',
                status: 'Active'
            };

            // Check if course code already exists
            if (courses.find(c => c.code === newCourse.code)) {
                showNotification('Course code already exists!', 'error');
                return;
            }

            // Simulate loading
            const submitBtn = event.target.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');
            submitBtn.textContent = 'Adding...';

            setTimeout(() => {
                courses.push(newCourse);
                renderCoursesTable();
                populateDropdowns();
                closeModal('course-modal');
                event.target.reset();
                
                submitBtn.classList.remove('loading');
                submitBtn.textContent = 'Add Course';
                
                showNotification(`Course ${newCourse.code} added successfully!`, 'success');
            }, 1500);
        }

        function viewCourse(courseCode) {
            const course = courses.find(c => c.code === courseCode);
            if (course) {
                alert(`Course Details:\n\nCode: ${course.code}\nName: ${course.name}\nInstructor: ${course.instructor}\nCredits: ${course.credits}\nEnrolled: ${course.enrolled}/${course.capacity}\nDepartment: ${course.department}\nDescription: ${course.description}`);
            }
        }

        function editCourse(courseCode) {
            showNotification('Edit functionality would open a modal with course data pre-filled', 'info');
        }

        function deleteCourse(courseCode) {
            if (confirm('Are you sure you want to delete this course?')) {
                const index = courses.findIndex(c => c.code === courseCode);
                if (index > -1) {
                    const course = courses[index];
                    courses.splice(index, 1);
                    renderCoursesTable();
                    populateDropdowns();
                    showNotification(`Course ${course.code} deleted successfully!`, 'success');
                }
            }
        }

        function searchCourses() {
            const searchTerm = document.getElementById('course-search').value.toLowerCase();
            const filteredCourses = courses.filter(course => 
                course.code.toLowerCase().includes(searchTerm) ||
                course.name.toLowerCase().includes(searchTerm) ||
                course.instructor.toLowerCase().includes(searchTerm)
            );
            renderFilteredCourses(filteredCourses);
        }

        function filterCourses() {
            const filterValue = document.getElementById('course-filter').value;
            const filteredCourses = filterValue ? 
                courses.filter(course => course.department === filterValue) : 
                courses;
            renderFilteredCourses(filteredCourses);
        }

        function renderFilteredCourses(filteredCourses) {
            const tableBody = document.getElementById('courses-table');
            let html = '';

            filteredCourses.forEach(course => {
                html += `
                    <tr>
                        <td>${course.code}</td>
                        <td>${course.name}</td>
                        <td>${course.instructor}</td>
                        <td>${course.enrolled}/${course.capacity}</td>
                        <td>${course.credits}</td>
                        <td><span class="badge badge-success">${course.status}</span></td>
                        <td>
                            <button class="btn btn-success" onclick="viewCourse('${course.code}')" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">👁️ View</button>
                            <button class="btn btn-warning" onclick="editCourse('${course.code}')" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">✏️ Edit</button>
                            <button class="btn btn-danger" onclick="deleteCourse('${course.code}')" style="padding: 6px 12px; font-size: 0.9rem;">🗑️ Delete</button>
                        </td>
                    </tr>
                `;
            });

            tableBody.innerHTML = html;
        }

        // ===== GRADE MANAGEMENT =====
        function renderGradesTable() {
            const tableBody = document.getElementById('grades-table');
            let html = '';

            grades.forEach((grade, index) => {
                const gradeClass = getGradeClass(grade.grade);
                html += `
                    <tr>
                        <td>${grade.student}</td>
                        <td>${grade.course}</td>
                        <td>${grade.assignment}</td>
                        <td><span class="badge ${gradeClass}">${grade.grade}</span></td>
                        <td>${grade.points}/${grade.maxPoints}</td>
                        <td>${grade.date}</td>
                        <td>
                            <button class="btn btn-success" onclick="viewGrade(${index})" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">👁️ View</button>
                            <button class="btn btn-warning" onclick="editGrade(${index})" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">✏️ Edit</button>
                            <button class="btn btn-danger" onclick="deleteGrade(${index})" style="padding: 6px 12px; font-size: 0.9rem;">🗑️ Delete</button>
                        </td>
                    </tr>
                `;
            });

            tableBody.innerHTML = html;
        }

        function getGradeClass(grade) {
            switch(grade) {
                case 'A': return 'badge-success';
                case 'B': return 'badge-info';
                case 'C': return 'badge-warning';
                case 'D': return 'badge-warning';
                case 'F': return 'badge-danger';
                default: return 'badge-info';
            }
        }

        function addGrade(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const newGrade = {
                student: formData.get('student'),
                course: formData.get('course'),
                assignment: formData.get('assignment'),
                grade: formData.get('grade'),
                points: parseInt(formData.get('points')) || 0,
                maxPoints: parseInt(formData.get('maxPoints')) || 100,
                date: new Date().toISOString().split('T')[0],
                comments: formData.get('comments') || 'No comments'
            };

            // Simulate loading
            const submitBtn = event.target.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');
            submitBtn.textContent = 'Adding...';

            setTimeout(() => {
                grades.push(newGrade);
                renderGradesTable();
                closeModal('grade-modal');
                event.target.reset();
                
                submitBtn.classList.remove('loading');
                submitBtn.textContent = 'Add Grade';
                
                showNotification(`Grade added for ${newGrade.student} in ${newGrade.course}!`, 'success');
            }, 1500);
        }

        function viewGrade(index) {
            const grade = grades[index];
            if (grade) {
                alert(`Grade Details:\n\nStudent: ${grade.student}\nCourse: ${grade.course}\nAssignment: ${grade.assignment}\nGrade: ${grade.grade}\nPoints: ${grade.points}/${grade.maxPoints}\nDate: ${grade.date}\nComments: ${grade.comments}`);
            }
        }

        function editGrade(index) {
            showNotification('Edit functionality would open a modal with grade data pre-filled', 'info');
        }

        function deleteGrade(index) {
            if (confirm('Are you sure you want to delete this grade?')) {
                const grade = grades[index];
                grades.splice(index, 1);
                renderGradesTable();
                showNotification(`Grade deleted for ${grade.student}!`, 'success');
            }
        }

        function searchGrades() {
            const searchTerm = document.getElementById('grade-search').value.toLowerCase();
            const filteredGrades = grades.filter(grade => 
                grade.student.toLowerCase().includes(searchTerm) ||
                grade.course.toLowerCase().includes(searchTerm) ||
                grade.assignment.toLowerCase().includes(searchTerm)
            );
            renderFilteredGrades(filteredGrades);
        }

        function filterGrades() {
            const filterValue = document.getElementById('grade-filter').value;
            const filteredGrades = filterValue ? 
                grades.filter(grade => grade.grade === filterValue) : 
                grades;
            renderFilteredGrades(filteredGrades);
        }

        function renderFilteredGrades(filteredGrades) {
            const tableBody = document.getElementById('grades-table');
            let html = '';

            filteredGrades.forEach((grade, index) => {
                const gradeClass = getGradeClass(grade.grade);
                html += `
                    <tr>
                        <td>${grade.student}</td>
                        <td>${grade.course}</td>
                        <td>${grade.assignment}</td>
                        <td><span class="badge ${gradeClass}">${grade.grade}</span></td>
                        <td>${grade.points}/${grade.maxPoints}</td>
                        <td>${grade.date}</td>
                        <td>
                            <button class="btn btn-success" onclick="viewGrade(${index})" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">👁️ View</button>
                            <button class="btn btn-warning" onclick="editGrade(${index})" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">✏️ Edit</button>
                            <button class="btn btn-danger" onclick="deleteGrade(${index})" style="padding: 6px 12px; font-size: 0.9rem;">🗑️ Delete</button>
                        </td>
                    </tr>
                `;
            });

            tableBody.innerHTML = html;
        }

        // ===== ATTENDANCE MANAGEMENT =====
        function renderAttendanceTable() {
            const tableBody = document.getElementById('attendance-table');
            let html = '';

            attendance.forEach((record, index) => {
                const statusClass = record.status === 'Present' ? 'badge-success' : 'badge-danger';
                html += `
                    <tr>
                        <td>${record.date}</td>
                        <td>${record.course}</td>
                        <td>${record.student}</td>
                        <td><span class="badge ${statusClass}">${record.status}</span></td>
                        <td>${record.time}</td>
                        <td>
                            <button class="btn btn-warning" onclick="editAttendance(${index})" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">✏️ Edit</button>
                            <button class="btn btn-danger" onclick="deleteAttendance(${index})" style="padding: 6px 12px; font-size: 0.9rem;">🗑️ Delete</button>
                        </td>
                    </tr>
                `;
            });

            tableBody.innerHTML = html;
        }

        function recordAttendance(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const date = formData.get('date');
            const course = formData.get('course');
            
            // Get selected students
            const studentCheckboxes = document.querySelectorAll('#attendance-students input[type="checkbox"]');
            const attendanceRecords = [];
            
            studentCheckboxes.forEach(checkbox => {
                const status = checkbox.checked ? 'Present' : 'Absent';
                const time = checkbox.checked ? '09:00 AM' : '-';
                
                attendanceRecords.push({
                    date: date,
                    course: course,
                    student: checkbox.value,
                    status: status,
                    time: time
                });
            });

            // Simulate loading
            const submitBtn = event.target.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');
            submitBtn.textContent = 'Recording...';

            setTimeout(() => {
                attendance.push(...attendanceRecords);
                renderAttendanceTable();
                updateDashboard();
                closeModal('attendance-modal');
                event.target.reset();
                
                submitBtn.classList.remove('loading');
                submitBtn.textContent = 'Record Attendance';
                
                showNotification(`Attendance recorded for ${course} on ${date}!`, 'success');
            }, 1500);
        }

        function loadAttendance() {
            const date = document.getElementById('attendance-date').value;
            const course = document.getElementById('attendance-course').value;
            
            let filteredAttendance = attendance;
            
            if (date) {
                filteredAttendance = filteredAttendance.filter(record => record.date === date);
            }
            
            if (course) {
                filteredAttendance = filteredAttendance.filter(record => record.course === course);
            }
            
            renderFilteredAttendance(filteredAttendance);
        }

        function renderFilteredAttendance(filteredAttendance) {
            const tableBody = document.getElementById('attendance-table');
            let html = '';

            filteredAttendance.forEach((record, index) => {
                const statusClass = record.status === 'Present' ? 'badge-success' : 'badge-danger';
                html += `
                    <tr>
                        <td>${record.date}</td>
                        <td>${record.course}</td>
                        <td>${record.student}</td>
                        <td><span class="badge ${statusClass}">${record.status}</span></td>
                        <td>${record.time}</td>
                        <td>
                            <button class="btn btn-warning" onclick="editAttendance(${index})" style="margin-right: 5px; padding: 6px 12px; font-size: 0.9rem;">✏️ Edit</button>
                            <button class="btn btn-danger" onclick="deleteAttendance(${index})" style="padding: 6px 12px; font-size: 0.9rem;">🗑️ Delete</button>
                        </td>
                    </tr>
                `;
            });

            tableBody.innerHTML = html;
        }

        function editAttendance(index) {
            showNotification('Edit functionality would open a modal with attendance data pre-filled', 'info');
        }

        function deleteAttendance(index) {
            if (confirm('Are you sure you want to delete this attendance record?')) {
                const record = attendance[index];
                attendance.splice(index, 1);
                renderAttendanceTable();
                updateDashboard();
                showNotification(`Attendance record deleted for ${record.student}!`, 'success');
            }
        }

        // ===== GPA CALCULATOR =====
        function addCourseToCalculator() {
            const courseName = document.getElementById('calc-course').value;
            const grade = document.getElementById('calc-grade').value;
            const credits = document.getElementById('calc-credits').value;

            if (!courseName || !grade || !credits) {
                showNotification('Please fill in all fields!', 'error');
                return;
            }

            const newCourse = {
                name: courseName,
                grade: parseFloat(grade),
                credits: parseInt(credits),
                points: parseFloat(grade) * parseInt(credits)
            };

            calculatorCourses.push(newCourse);
            renderCalculatorTable();
            updateCalculatorStats();
            clearCalculatorForm();
            showNotification(`Course "${courseName}" added to calculator!`, 'success');
        }

        function renderCalculatorTable() {
            const tableBody = document.getElementById('calculator-table');
            let html = '';

            calculatorCourses.forEach((course, index) => {
                html += `
                    <tr>
                        <td>${course.name}</td>
                        <td>${course.grade.toFixed(1)}</td>
                        <td>${course.credits}</td>
                        <td>${course.points.toFixed(1)}</td>
                        <td>
                            <button class="btn btn-danger" onclick="removeCourseFromCalculator(${index})" style="padding: 6px 12px; font-size: 0.9rem;">🗑️ Remove</button>
                        </td>
                    </tr>
                `;
            });

            tableBody.innerHTML = html;
        }

        function updateCalculatorStats() {
            const totalCredits = calculatorCourses.reduce((sum, course) => sum + course.credits, 0);
            const totalPoints = calculatorCourses.reduce((sum, course) => sum + course.points, 0);
            const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

            document.getElementById('total-credits').textContent = totalCredits;
            document.getElementById('total-points').textContent = totalPoints.toFixed(1);
            document.getElementById('calculated-gpa').textContent = gpa.toFixed(2);
            document.getElementById('courses-count').textContent = calculatorCourses.length;
        }

        function clearCalculatorForm() {
            document.getElementById('calc-course').value = '';
            document.getElementById('calc-grade').value = '';
            document.getElementById('calc-credits').value = '';
        }

        function removeCourseFromCalculator(index) {
            const course = calculatorCourses[index];
            calculatorCourses.splice(index, 1);
            renderCalculatorTable();
            updateCalculatorStats();
            showNotification(`Course "${course.name}" removed from calculator!`, 'success');
        }

        function clearCalculator() {
            if (confirm('Are you sure you want to clear all courses from the calculator?')) {
                calculatorCourses = [];
                renderCalculatorTable();
                updateCalculatorStats();
                showNotification('Calculator cleared!', 'success');
            }
        }

        // ===== REPORTS =====
        function generateReport() {
            const reportType = document.getElementById('report-type').value;
            const reportRange = document.getElementById('report-range').value;
            
            const button = event.target;
            button.classList.add('loading');
            button.textContent = '📊 Generating...';
            
            setTimeout(() => {
                const reportData = generateReportData(reportType, reportRange);
                displayReport(reportData, reportType);
                
                button.classList.remove('loading');
                button.textContent = '📊 Generate Report';
                
                showNotification(`${reportType.replace('-', ' ')} report generated successfully!`, 'success');
            }, 2000);
        }

        function generateReportData(type, range) {
            switch(type) {
                case 'student-performance':
                    return {
                        title: 'Student Performance Report',
                        data: students.map(s => ({
                            name: `${s.firstName} ${s.lastName}`,
                            gpa: s.gpa,
                            program: s.program
                        }))
                    };
                case 'course-analytics':
                    return {
                        title: 'Course Analytics Report',
                        data: courses.map(c => ({
                            code: c.code,
                            name: c.name,
                            enrollment: `${c.enrolled}/${c.capacity}`,
                            utilization: `${Math.round((c.enrolled/c.capacity)*100)}%`
                        }))
                    };
                case 'attendance-summary':
                    return {
                        title: 'Attendance Summary Report',
                        data: [
                            { metric: 'Total Records', value: attendance.length },
                            { metric: 'Present', value: attendance.filter(a => a.status === 'Present').length },
                            { metric: 'Absent', value: attendance.filter(a => a.status === 'Absent').length },
                            { metric: 'Attendance Rate', value: calculateAttendanceRate() + '%' }
                        ]
                    };
                case 'grade-distribution':
                    const gradeCount = {};
                    grades.forEach(g => {
                        gradeCount[g.grade] = (gradeCount[g.grade] || 0) + 1;
                    });
                    return {
                        title: 'Grade Distribution Report',
                        data: Object.entries(gradeCount).map(([grade, count]) => ({
                            grade: grade,
                            count: count,
                            percentage: `${Math.round((count/grades.length)*100)}%`
                        }))
                    };
                default:
                    return { title: 'Report', data: [] };
            }
        }

        function displayReport(reportData, type) {
            const reportContainer = document.getElementById('report-data');
            let html = `<div class="chart-container"><h3>${reportData.title}</h3>`;
            
            if (type === 'student-performance') {
                html += '<table class="data-table"><thead><tr><th>Student</th><th>GPA</th><th>Program</th></tr></thead><tbody>';
                reportData.data.forEach(item => {
                    html += `<tr><td>${item.name}</td><td>${item.gpa}</td><td>${item.program}</td></tr>`;
                });
                html += '</tbody></table>';
            } else if (type === 'course-analytics') {
                html += '<table class="data-table"><thead><tr><th>Code</th><th>Course</th><th>Enrollment</th><th>Utilization</th></tr></thead><tbody>';
                reportData.data.forEach(item => {
                    html += `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.enrollment}</td><td>${item.utilization}</td></tr>`;
                });
                html += '</tbody></table>';
            } else if (type === 'attendance-summary') {
                html += '<table class="data-table"><thead><tr><th>Metric</th><th>Value</th></tr></thead><tbody>';
                reportData.data.forEach(item => {
                    html += `<tr><td>${item.metric}</td><td>${item.value}</td></tr>`;
                });
                html += '</tbody></table>';
            } else if (type === 'grade-distribution') {
                html += '<table class="data-table"><thead><tr><th>Grade</th><th>Count</th><th>Percentage</th></tr></thead><tbody>';
                reportData.data.forEach(item => {
                    html += `<tr><td><span class="badge ${getGradeClass(item.grade)}">${item.grade}</span></td><td>${item.count}</td><td>${item.percentage}</td></tr>`;
                });
                html += '</tbody></table>';
            }
            
            html += '</div>';
            reportContainer.innerHTML = html;
        }

        // ===== UTILITY FUNCTIONS =====
        function populateDropdowns() {
            // Populate student dropdowns
            const studentSelects = document.querySelectorAll('#grade-student-select');
            studentSelects.forEach(select => {
                select.innerHTML = '<option value="">Select Student</option>';
                students.forEach(student => {
                    select.innerHTML += `<option value="${student.firstName} ${student.lastName}">${student.firstName} ${student.lastName}</option>`;
                });
            });

            // Populate course dropdowns
            const courseSelects = document.querySelectorAll('#grade-course-select, #attendance-course-select, #attendance-course');
            courseSelects.forEach(select => {
                select.innerHTML = '<option value="">Select Course</option>';
                courses.forEach(course => {
                    select.innerHTML += `<option value="${course.code}">${course.code} - ${course.name}</option>`;
                });
            });

            // Populate attendance students when course is selected
            document.getElementById('attendance-course-select').addEventListener('change', function() {
                const selectedCourse = this.value;
                const studentsContainer = document.getElementById('attendance-students');
                
                if (selectedCourse) {
                    let html = '<h4 style="margin-bottom: 15px;">Select Students Present:</h4>';
                    students.forEach(student => {
                        html += `
                            <label style="display: flex; align-items: center; margin-bottom: 10px; padding: 10px; border: 1px solid #e5e7eb; border-radius: 8px;">
                                <input type="checkbox" value="${student.firstName} ${student.lastName}" style="margin-right: 10px;">
                                ${student.firstName} ${student.lastName} (${student.id})
                            </label>
                        `;
                    });
                    studentsContainer.innerHTML = html;
                } else {
                    studentsContainer.innerHTML = '<p style="color: #6b7280;">Please select a course first.</p>';
                }
            });
        }

        function setDefaultDates() {
            const today = new Date().toISOString().split('T')[0];
            document.querySelectorAll('input[type="date"]').forEach(input => {
                if (!input.value) {
                    input.value = today;
                }
            });
        }

        // ===== MODAL MANAGEMENT =====
        function openModal(modalId) {
            document.getElementById(modalId).classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close modals when clicking outside
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal')) {
                closeModal(event.target.id);
            }
        });

        // Close modals with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                document.querySelectorAll('.modal.active').forEach(modal => {
                    closeModal(modal.id);
                });
            }
        });

        // ===== NOTIFICATION SYSTEM =====
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // ===== TABLE SORTING =====
        function sortTable(tableId, columnIndex) {
            const table = document.getElementById(tableId);
            const rows = Array.from(table.rows);
            const isNumeric = !isNaN(parseFloat(rows[0].cells[columnIndex].textContent));
            
            const direction = currentSortColumn === columnIndex && currentSortDirection === 'asc' ? 'desc' : 'asc';
            currentSortColumn = columnIndex;
            currentSortDirection = direction;
            
            rows.sort((a, b) => {
                const aVal = a.cells[columnIndex].textContent.trim();
                const bVal = b.cells[columnIndex].textContent.trim();
                
                if (isNumeric) {
                    return direction === 'asc' ? parseFloat(aVal) - parseFloat(bVal) : parseFloat(bVal) - parseFloat(aVal);
                } else {
                    return direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
                }
            });
            
            rows.forEach(row => table.appendChild(row));
            showNotification(`Table sorted by column ${columnIndex + 1} (${direction})`, 'info');
        }
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'967d15b5d4e99556',t:'MTc1Mzk2NDc5My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
