import React, { useState, useEffect } from "react";

const EditModal = ({ title, value, onClose, onSave }) => {
  const [input, setInput] = useState(value);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <textarea
          className="border p-2 w-full rounded mb-4 bg-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={3}
        />
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => onSave(input)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminPanel = () => {
  const [data, setData] = useState({
    projectdonecount: "",
    employeecount: "",
    happyclientcount: "",
    aboutus: { details: "", fulldetail: "" },
    project: Array(4).fill().map(() => ({ title: "", category: "", image: null })),
  });
  const [services, setServices] = useState(Array(5).fill({ heading: "", description: "" }));

  const [modalField, setModalField] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [modalIndex, setModalIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchedBodyData, setFetchedBodyData] = useState(null);
  const [fetchedServiceData, setFetchedServiceData] = useState(null);

  useEffect(() => {
    const fetchBodyData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/oleotechsolution/homepage", {
          method: "GET",
        });
        if (!res.ok) throw new Error(`Homepage fetch failed: ${res.status}`);
        const data = await res.json();
        setFetchedBodyData(data);
        setData((prev) => ({
          ...prev,
          ...data[0],
          aboutus: data[0].aboutus || prev.aboutus,
          project: data[0].project || prev.project,
        }));
      } catch (error) {
        console.error("Homepage fetch error:", error);
      }
    };

    const fetchServiceData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/oleotechsolution/servicepage", {
          method: "GET",
        });
        if (!res.ok) throw new Error(`Service fetch failed: ${res.status}`);
        const data = await res.json();
        setFetchedServiceData(data);
        setServices(data[0]?.services || services);
      } catch (error) {
        console.error("Service fetch error:", error);
      }
    };

    const fetchAll = async () => {
      await Promise.all([fetchBodyData(), fetchServiceData()]);
      setLoading(false);
    };

    fetchAll();
  }, []);

  const handleHomepageSubmit = async () => {
    const formData = new FormData();
    formData.append("projectdonecount", data.projectdonecount);
    formData.append("employeecount", data.employeecount);
    formData.append("happyclientcount", data.happyclientcount);
    formData.append("aboutus", JSON.stringify(data.aboutus));

    const projectCopy = data.project.map(({ title, category }) => ({ title, category }));
    formData.append("project", JSON.stringify(projectCopy));

    data.project.forEach((p) => {
      if (p.image) {
        formData.append("projectimages", p.image);
      }
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
        headers: { "Content-Type": "application/json" },
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

  const handleSave = (newValue) => {
    if (modalField.startsWith("project.")) {
      const key = modalField.split(".")[1];
      const updated = [...data.project];
      updated[modalIndex][key] = newValue;
      setData((prev) => ({ ...prev, project: updated }));
    } else if (modalField.startsWith("services.")) {
      const key = modalField.split(".")[1];
      const updated = [...services];
      updated[modalIndex][key] = newValue;
      setServices(updated);
    } else if (modalField.includes("aboutus")) {
      const key = modalField.split(".")[1];
      setData((prev) => ({ ...prev, aboutus: { ...prev.aboutus, [key]: newValue } }));
    } else {
      setData((prev) => ({ ...prev, [modalField]: newValue }));
    }
    setModalField(null);
    setModalIndex(null);
  };

  if (loading) return <div className="text-slate-950">Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <section className="grid grid-cols-1 gap-4 mb-8">
        {["projectdonecount", "employeecount", "happyclientcount"].map((key) => (
          <div
            key={key}
            className="p-3 border rounded bg-green-100 cursor-pointer"
            onClick={() => {
              setModalField(key);
              setModalTitle(`Edit ${key}`);
            }}
          >
            {data[key] || fetchedBodyData?.[0]?.[key] || `Click to enter ${key}`}
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">About Us</h2>
        {["details", "fulldetail"].map((key) => (
          <div
            key={key}
            className="p-3 border rounded bg-green-100 cursor-pointer mb-2"
            onClick={() => {
              setModalField(`aboutus.${key}`);
              setModalTitle(`Edit About Us (${key})`);
            }}
          >
            {data.aboutus[key] || fetchedBodyData?.[0]?.aboutus?.[key] || `Click to enter ${key}`}
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        {data.project.map((p, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-center">
            {["title", "category"].map((field) => (
              <div
                key={field}
                className="p-3 border rounded bg-green-100 cursor-pointer"
                onClick={() => {
                  setModalField(`project.${field}`);
                  setModalIndex(i);
                  setModalTitle(`Edit Project ${i + 1} - ${field}`);
                }}
              >
                {p[field] || `Click to enter ${field}`}
              </div>
            ))}
            <div>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files?.[0] || fetchedBodyData[0].project[i].image  ;
      const updated = [...data.project];
      updated[i].image = file;
      setData((prev) => ({ ...prev, project: updated }));
    }}
    className="bg-green-50 p-2 rounded border"
  />
  
  {p.image && (
    <img
      src={
        p.image instanceof File
          ? URL.createObjectURL(p.image)
          : p.image
      }
      alt={`Preview ${i + 1}`}
      className="mt-2 w-32 h-32 object-cover rounded border"
    />
  )}
</div>

          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        {services.map((s, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {["heading", "description"].map((field) => (
              <div
                key={field}
                className="p-3 border rounded bg-green-100 cursor-pointer"
                onClick={() => {
                  setModalField(`services.${field}`);
                  setModalIndex(i);
                  setModalTitle(`Edit Service ${i + 1} - ${field}`);
                }}
              >
                {s[field] || `Click to enter ${field}`}
              </div>
            ))}
          </div>
        ))}
      </section>

      <div className="text-center mb-8">
        <button
          className="bg-purple-700 text-white px-6 py-3 rounded"
          onClick={handleHomepageSubmit}
        >
          Submit Homepage Data
        </button>
      </div>

      <div className="text-center">
        <button
          className="bg-blue-700 text-white px-6 py-3 rounded"
          onClick={handleServiceSubmit}
        >
          Submit Services Data
        </button>
      </div>

      {modalField && (
        <EditModal
          title={modalTitle}
          value={(() => {
            if (modalField.startsWith("project.")) return data.project[modalIndex][modalField.split(".")[1]];
            if (modalField.startsWith("services.")) return services[modalIndex][modalField.split(".")[1]];
            if (modalField.includes("aboutus")) return data.aboutus[modalField.split(".")[1]];
            return data[modalField];
          })()}
          onClose={() => setModalField(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default AdminPanel;
