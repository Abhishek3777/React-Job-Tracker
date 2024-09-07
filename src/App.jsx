import React from 'react'
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import JobsPage from './pages/JobsPage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayouts from './layouts/MainLayouts';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  // Delete job
  const deleteJob = async (jobId) => {
    console.log(`job id to be deleted is ${jobId}`);

    const res = await fetch(`/api/jobs/${jobId}`, {
      method: 'DELETE',

    });
    return;
  };
  // update Job
  const updateJob = async (job) => {

    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;

  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSumit={updateJob} />} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
