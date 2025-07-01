import React, { useState } from "react";

const AdminPanel = () => {
  const [data, setData] = useState({
    projectdonecount: "",
    ongoingprojectcount: "",
    activeprojectcount: "",
    aboutus: { details: "", fulldetail: "" },
    project: [
      { title: "", category: "", image: "" },
      { title: "", category: "", image: "" },
      { title: "", category: "", image: "" },
      { title: "", category: "", image: "" }
    ],
    services: [
      { heading: "", description: "" },
      { heading: "", description: "" },
      { heading: "", description: "" },
      { heading: "", description: "" },
      { heading: "", description: "" }
    ],
  });

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...data.project];
    updatedProjects[index][field] = value;
    setData((prev) => ({ ...prev, project: updatedProjects }));
  };

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...data.services];
    updatedServices[index][field] = value;
    setData((prev) => ({ ...prev, services: updatedServices }));
  };

  const handleSubmit = () => {
    console.log("Submitting data:", data);
    // send data to server here using fetch or axios
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <section className="grid grid-cols-1 gap-6 mb-8">
        <input
          className="border p-3 rounded bg-green-50"
          placeholder="Projects Done"
          value={data.projectdonecount}
          onChange={(e) => setData({ ...data, projectdonecount: e.target.value })}
        />
        <input
          className="border p-3 rounded bg-green-50"
          placeholder="Ongoing Projects"
          value={data.ongoingprojectcount}
          onChange={(e) => setData({ ...data, ongoingprojectcount: e.target.value })}
        />
        <input
          className="border p-3 rounded bg-green-50"
          placeholder="Active Projects"
          value={data.activeprojectcount}
          onChange={(e) => setData({ ...data, activeprojectcount: e.target.value })}
        />
        <input
          className="border p-3 rounded bg-green-50"
          placeholder="About Us (Short Detail)"
          value={data.aboutus.details}
          onChange={(e) => setData({ ...data, aboutus: { ...data.aboutus, details: e.target.value } })}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">About Us (Full Detail)</h2>
        <textarea
          className="border p-3 w-full rounded bg-green-50"
          placeholder="Full Detail"
          rows={4}
          value={data.aboutus.fulldetail}
          onChange={(e) => setData({ ...data, aboutus: { ...data.aboutus, fulldetail: e.target.value } })}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Projects (4 Inputs)</h2>
        {data.project.map((proj, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              className="border p-2 rounded bg-green-50"
              placeholder={`Title ${index + 1}`}
              value={proj.title}
              onChange={(e) => handleProjectChange(index, "title", e.target.value)}
            />
            <input
              className="border p-2 rounded bg-green-50"
              placeholder={`Category ${index + 1}`}
              value={proj.category}
              onChange={(e) => handleProjectChange(index, "category", e.target.value)}
            />
            <input
              className="border p-2 rounded bg-green-50"
              placeholder={`Image ${index + 1}`}
              value={proj.image}
              onChange={(e) => handleProjectChange(index, "image", e.target.value)}
            />
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Services (5 Inputs)</h2>
        {data.services.map((srv, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              className="border p-2 rounded bg-green-50"
              placeholder={`Heading ${index + 1}`}
              value={srv.heading}
              onChange={(e) => handleServiceChange(index, "heading", e.target.value)}
            />
            <textarea
              className="border p-2 rounded bg-green-50"
              placeholder={`Description ${index + 1}`}
              rows={3}
              value={srv.description}
              onChange={(e) => handleServiceChange(index, "description", e.target.value)}
            />
          </div>
        ))}
      </section>

      <div className="text-center">
        <button className="bg-purple-700 text-white px-6 py-3 rounded" onClick={handleSubmit}>
          Submit All Data
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
                