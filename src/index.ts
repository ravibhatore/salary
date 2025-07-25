import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import authRouter from './router/authRouter';
import employeeRouter from './router/employeeRouter'
import payroll from './router/payrollRouter';
import salary from './router/salaryrouters'
import attendence from './router/attendanceRouter'

dotenv.config();
const app = express()
app.use(express.json());
app.use(cookieParser());

app.use('/auth',authRouter)
app.use('/employee',employeeRouter);
app.use('/payroll',payroll);
app.use('/salary',salary);
app.use('/martAttendance',attendence)


// app.use('auth',authRouter)
// app.use('auth',authRouter)


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Sever is running on ${process.env.PORT || 3000}`)
})
