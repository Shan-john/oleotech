import React, { useState } from "react";

const AdminPanel = () => {
  const [data, setData] = useState({
    projectdonecount: "",
    ongoingprojectcount: "",
    activeprojectcount: "",
    aboutus: { details: "", fulldetail: "" },
    project: [
      { title: "", category: "" },
      { title: "", category: "" },
      { title: "", category: "" },
      { title: "", category: "" },
    ],
  });

  const [services, setServices] = useState([
    { heading: "", description: "" },
    { heading: "", description: "" },
    { heading: "", description: "" },
    { heading: "", description: "" },
    { heading: "", description: "" },
  ]);

  const [projectImages, setProjectImages] = useState([null, null, null, null]);

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...data.project];
    updatedProjects[index][field] = value;
    setData((prev) => ({ ...prev, project: updatedProjects }));
  };

  const handleImageChange = (index, file) => {
    const updatedImages = [...projectImages];
    updatedImages[index] = file;
    setProjectImages(updatedImages);
  };

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...services];
    updatedServices[index][field] = value;
    setServices(updatedServices);
  };

  const handleHomepageSubmit = async () => {
    const formData = new FormData();

    formData.append("projectdonecount", data.projectdonecount);
    formData.append("ongoingprojectcount", data.ongoingprojectcount);
    formData.append("activeprojectcount", data.activeprojectcount);
    formData.append("aboutus", JSON.stringify(data.aboutus));

    const projectWithoutImages = data.project.map((proj) => ({
      title: proj.title,
      category: proj.category,
    }));
    formData.append("project", JSON.stringify(projectWithoutImages));

    projectImages.forEach((img) => {
      if (img) formData.append("projectimages", img);
    });

    try {
      const res = await fetch("http://localhost:3000/api/oleotechsolution/homepage", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      console.log(result);
      alert("Homepage data submitted successfully!");
    } catch (err) {
      console.error("Homepage Submit Error:", err);
      alert("Homepage submit failed.");
    }
  };

  const handleServiceSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/oleotechsolution/servicepage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ services }),
      });
      const result = await res.json();
      console.log(result);
      alert("Services submitted successfully!");
    } catch (err) {
      console.error("Service Submit Error:", err);
      alert("Service submit failed.");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Basic Input Fields */}
      <section className="grid grid-cols-1 gap-6 mb-8">
        <input
          className="border p-3 rounded bg-green-50"
          placeholder="Projects Done"
          value={data.projectdonecount}
          onChange={(e) =>
            setData({ ...data, projectdonecount: e.target.value })
          }
        />
        <input
          className="border p-3 rounded bg-green-50"
          placeholder="Ongoing Projects"
          value={data.ongoingprojectcount}
          onChange={(e) =>
            setData({ ...data, ongoingprojectcount: e.target.value })
          }
        />
        <input
          className="border p-3 rounded bg-green-50"
          placeholder="Active Projects"
          value={data.activeprojectcount}
          onChange={(e) =>
            setData({ ...data, activeprojectcount: e.target.value })
          }
        />
        <input
          className="border p-3 rounded bg-green-50"
          placeholder="About Us (Short Detail)"
          value={data.aboutus.details}
          onChange={(e) =>
            setData({
              ...data,
              aboutus: { ...data.aboutus, details: e.target.value },
            })
          }
        />
      </section>

      {/* Full About Us */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">About Us (Full Detail)</h2>
        <textarea
          className="border p-3 w-full rounded bg-green-50"
          placeholder="Full Detail"
          rows={4}
          value={data.aboutus.fulldetail}
          onChange={(e) =>
            setData({
              ...data,
              aboutus: { ...data.aboutus, fulldetail: e.target.value },
            })
          }
        />
      </section>

      {/* Project Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Projects (4 Inputs)</h2>
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              className="border p-2 rounded bg-green-50"
              placeholder={`Title ${index + 1}`}
              value={data.project[index].title}
              onChange={(e) =>
                handleProjectChange(index, "title", e.target.value)
              }
            />
            <input
              className="border p-2 rounded bg-green-50"
              placeholder={`Category ${index + 1}`}
              value={data.project[index].category}
              onChange={(e) =>
                handleProjectChange(index, "category", e.target.value)
              }
            />
            <input
              type="file"
              accept="image/*"
              className="border p-2 rounded bg-green-50"
              onChange={(e) => handleImageChange(index, e.target.files[0])}
            />
          </div>
        ))}
      </section>

      {/* Submit Homepage Button */}
      <div className="text-center mb-12">
        <button
          className="bg-purple-700 text-white px-6 py-3 rounded"
          onClick={handleHomepageSubmit}
        >
          Submit Homepage Data
        </button>
      </div>

      {/* Services Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Services (5 Inputs)</h2>
        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              className="border p-2 rounded bg-green-50"
              placeholder={`Heading ${index + 1}`}
              value={services[index].heading}
              onChange={(e) =>
                handleServiceChange(index, "heading", e.target.value)
              }
            />
            <textarea
              className="border p-2 rounded bg-green-50"
              placeholder={`Description ${index + 1}`}
              rows={3}
              value={services[index].description}
              onChange={(e) =>
                handleServiceChange(index, "description", e.target.value)
              }
            />
          </div>
        ))}
      </section>

      {/* Submit Services Button */}
      <div className="text-center">
        <button
          className="bg-blue-700 text-white px-6 py-3 rounded"
          onClick={handleServiceSubmit}
        >
          Submit Services Data
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
