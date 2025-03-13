import React from 'react';

const CourseManagementSystem: React.FC = () => {
    return (
        <div>
            <h2>Course Management System</h2>
            <p>This web application is engineered to manage academic courses effectively, utilizing React, TypeScript, and Supabase.</p>
            <h3>Features</h3>
            <ul>
                <li><strong>Role-Based Access Control</strong>: Admin, Instructor, Student roles.</li>
                <li><strong>Real-Time Updates</strong>: Tracks enrollments live and notifications for course updates.</li>
                <li><strong>Course Management</strong>: Create and modify course details, manage schedules, and handle prerequisites.</li>
            </ul>
            <h3>Hosted Side</h3>
            <p><a href="https://coursemanagment.netlify.app">Course Management System</a></p>
        </div>
    );
};

export default CourseManagementSystem; 