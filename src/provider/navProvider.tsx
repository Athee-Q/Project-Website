'use client'
import React, { createContext, useEffect, useState, ReactNode } from 'react';


export interface NavDataItem {
    link: string;
    title: string;
    image: string;
    description: string;
}

export interface NavData {
    title: string;
    dropDown: NavDataItem[];
}

interface NavContextType {
    navData: NavData[] | null;
}


const contextInitialValue: NavContextType = {
    navData: null,
};


export const NavContext = createContext<NavContextType>(contextInitialValue);


interface NavProviderProps {
    children: ReactNode; 
}

export const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
    const [navData, setNavData] = useState<NavData[] | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/navData');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data: NavData[] = await response.json();
            setNavData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <NavContext.Provider value={{ navData }}>
            {children}
        </NavContext.Provider>
    );
};
