'use client'
import React, { useEffect, useState } from 'react'

interface Hiring {
    role: string
    environment: string
    place: string
    department: string
    schedule: string
}

const Hiring = () => {
    const [hiring, setHiring] = useState<Hiring[]>([]);

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/hiring');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);

            setHiring(data);
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    }
    return (
        <section className="py-16 w-11/12 mx-auto space-y-6">
            {hiring.map(({ role, environment, place, department, schedule }, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-5 items-center">
                    <div className="  font-semibold text-indigo-800">{role}</div>
                    <div className="text-center  font-semibold text-orange-700">{environment}</div>
                    <div className="text-center  font-medium text-slate-500">{place}</div>
                    <div className="text-center  font-medium text-slate-700">{department}</div>
                    <div className="text-end  font-semibold text-green-600">{schedule}</div>
                </div>
            ))}
        </section>
    )
}

export default Hiring