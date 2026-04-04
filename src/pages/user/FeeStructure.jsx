import { useEffect, useState } from "react";
import API from "../../services/api.js";



const FeeStructure = () => {
  const [form, setForm] = useState([])
  

  useEffect(()=>{
    const fetchClasses = async () => {
    try {
      const res = await API.get('/classes')
      setForm(res.data)
      
    } catch (error) {
      console.error(error)
    }
  }
   fetchClasses()
  },[])
 
  return (
    <section id="fee-structure" className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Fee Structure</h2>
      <div className="max-w-3xl mx-auto grid gap-4">
        {form.map((f, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow flex justify-between">
            <span>{f.className}</span>
            <span className="font-semibold">{f.monthlyFee}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeeStructure