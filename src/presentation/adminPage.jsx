import React, { useState,useEffect } from "react";

const AdminPanel = () => {
  const [data, setData] = useState({
    projectdonecount: "",
    employeecount: "",
    happyclientcount: "",
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
  const [loading, setLoading] = useState(true);
  const [fetchedBodyData,setFetchedBodyData] =useState(null);
  const [fetchedServicedata,setFetchedServiceData] =useState(null);
  useEffect(() => {
    const fetchBodyData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/oleotechsolution/homepage", {
          method: "GET"
        });
  
        if (!res.ok) {
          throw new Error(`Homepage fetch failed: ${res.status}`);
        }
  
        const data = await res.json();
        setFetchedBodyData(data);
        
      } catch (error) {
        console.error("❌ Homepage fetch error:", error);
      }
    };
  
    const fetchServicedata = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/oleotechsolution/servicepage", {
          method: "GET",
        });
  
        if (!res.ok) {
          throw new Error(`Service fetch failed: ${res.status}`);
        }
  
        const data = await res.json();
        setFetchedServiceData(data);
     console.log(data)
      } catch (error) {
        console.error("❌ Service fetch error:", error);
      }
    };
  
    // 📌 Fetch both in parallel, and wait for both to finish
    const fetchAllData = async () => {
      setLoading(true); // Start loading
      await Promise.all([fetchBodyData(), fetchServicedata()]);
      setLoading(false); // Stop loading once both are done
    };
  
    fetchAllData();
  }, []);
  


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

    formData.append("projectdonecount", data.projectdonecount     );
    formData.append("employeecount", data.employeecount   );
    formData.append("happyclientcount", data.happyclientcount   );
    formData.append("aboutus", JSON.stringify(data.aboutus)   );

    const projectWithoutImages = data.project.map((proj,) => ({
      title: proj.title ,
      category: proj.category,
    }));
    formData.append("project", JSON.stringify(projectWithoutImages)     );

    projectImages.forEach((img ) => {
      if(img)  formData.append("projectimages",   img);
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

  if (loading) return <div className="text-slate-950">Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Basic Input Fields */}
      <section className="grid grid-cols-1 gap-6 mb-8">
        <input
          className="border p-3 rounded bg-green-50"
          placeholder={  fetchedBodyData[0].projectdonecount==null ? "Projects Done": fetchedBodyData[0].projectdonecount}
          value={data.projectdonecount}
          onChange={(e) =>
            setData({ ...data, projectdonecount: e.target.value })
          }
        />
        <input
          className="border p-3 rounded bg-green-50"
          placeholder={fetchedBodyData[0].employeecount==null?"Ongoing Projects":fetchedBodyData[0].employeecount}
          value={data.employeecount }
          onChange={(e) =>
            setData({ ...data, employeecount: e.target.value })
          }
        />
        <input
          className="border p-3 rounded bg-green-50"
          placeholder={fetchedBodyData[0].happyclientcount ===null?"Active Projects":fetchedBodyData[0].happyclientcount}
          value={data.happyclientcount }
          onChange={(e) =>
            setData({ ...data, happyclientcount: e.target.value })
          }
        />
        <input
          className="border p-3 rounded bg-green-50"
          placeholder={ fetchedBodyData[0].aboutus.details ==""?"About Us (Short Detail)": fetchedBodyData[0].aboutus.details}
          value={data.aboutus?.details  }
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
          placeholder={ fetchedBodyData[0].aboutus.fulldetail ==null ?`Full Detail ` :  fetchedBodyData[0].aboutus.fulldetail}
          rows={4}
          value={data.aboutus.fulldetail }
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
              placeholder={fetchedBodyData[0].project[index].title ===null ? `Title ${index + 1}` :fetchedBodyData[0].project[index].title}
              value={data.project[index].title }
              onChange={(e) =>
                handleProjectChange(index, "title", e.target.value)
              }
            />
            <input
              className="border p-2 rounded bg-green-50"
              placeholder={fetchedBodyData[0].project[index].category ==null?`Category ${index + 1}`:fetchedBodyData[0].project[index].category}
              value={data.project[index].category }
              onChange={(e) =>
                handleProjectChange(index, "category", e.target.value)
              }
            />
            <div className="flex flex-col items-start space-y-2">
  <img
    src={fetchedBodyData[0].project[index].image}
    alt="Project Preview"
    className="w-40 h-40 object-cover border rounded"
  />

  <input
    type="file"
    accept="image/*"
    className="border p-2 rounded bg-green-50"
    onChange={(e) => handleImageChange(index, e.target.files[0])}
  />
</div>

                  
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
              placeholder={  fetchedServicedata[0]?.services[index]?.heading ==null? `Heading ${index + 1}` :  fetchedServicedata[0]?.services[index]?.heading}
              value={services[index].heading    }
              onChange={(e) =>
                handleServiceChange(index, "heading", e.target.value)
              }
            />
            <textarea 
              className="border p-2 rounded bg-green-50"
              placeholder={     fetchedServicedata[0]?.services[index]?.description ==null? `Description ${index + 1}`: fetchedServicedata[0]?.services[index]?.description } 
              rows={3}
              value={services[index].description }
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
