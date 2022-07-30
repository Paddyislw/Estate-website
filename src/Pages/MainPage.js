import React from 'react'
import Card from '../Components/Card'
import { fakeData } from '../FakeData'
import { useState } from 'react'
import { useEffect } from 'react'

export default function MainPage() {
    const [data, setdata] = useState(fakeData)
    const [filtertype, setfiltertype] = useState('All')
    const [filterloca, setfilterloca] = useState('All')
    const [filterprice, setfilterprice] = useState('All')
    const [filteravai, setfilteravai] = useState('All')
    {/* */ }



    {/* This is the function to filter the values */ }
    const filterItems = () => {
        var filteredData;
        if (filtertype === 'All' && filterloca === 'All' && filterprice === 'All' && filteravai === 'All') {
            filteredData = fakeData;
        } else if (filtertype !== 'All' && filterloca === 'All' && filterprice === 'All' && filteravai === 'All') {
            filteredData = fakeData.filter(item => item.type === filtertype)
        }
        else if (filtertype === 'All' && filterloca !== 'All' && filterprice === 'All' && filteravai === 'All') {
            filteredData = fakeData.filter(item => item.location === filterloca)
        }
        else if (filtertype === 'All' && filterloca === 'All' && filterprice !== 'All' && filteravai === 'All') {
            filteredData = fakeData.filter(item => item.rent <= filterprice)
        }
        else if (filtertype === 'All' && filterloca === 'All' && filterprice === 'All' && filteravai !== 'All') {
            filteredData = fakeData.filter(item => item.available <= filteravai)
        }
        else if (filtertype !== 'All' && filterloca !== 'All' && filterprice === 'All' && filteravai === 'All') {
            filteredData = fakeData.filter(item => item.type === filtertype && item.location === filterloca)
        }
        else if (filtertype !== 'All' && filterloca === 'All' && filterprice !== 'All' && filteravai === 'All') {
            filteredData = fakeData.filter(item => item.type === filtertype && item.rent <= filterprice)
        }
        else if (filtertype !== 'All' && filterloca === 'All' && filterprice === 'All' && filteravai !== 'All') {
            filteredData = fakeData.filter(item => item.type === filtertype && item.available <= filteravai)
        }
        else if (filtertype === 'All' && filterloca !== 'All' && filterprice !== 'All' && filteravai === 'All') {
            filteredData = fakeData.filter(item => item.location === filterloca && item.rent <= filterprice)
        }
        else if (filtertype === 'All' && filterloca !== 'All' && filterprice === 'All' && filteravai !== 'All') {
            filteredData = fakeData.filter(item => item.location === filterloca && item.available <= filteravai)
        }
        else if (filtertype === 'All' && filterloca === 'All' && filterprice !== 'All' && filteravai !== 'All') {
            filteredData = fakeData.filter(item => item.rent <= filterprice && item.available <= filteravai)
        }
        else if (filtertype !== 'All' && filterloca !== 'All' && filterprice !== 'All' && filteravai === 'All') {
            filteredData = fakeData.filter(item => item.type === filtertype && item.location === filterloca && item.rent <= filterprice)
        }
        else if (filtertype !== 'All' && filterloca !== 'All' && filterprice === 'All' && filteravai !== 'All') {
            filteredData = fakeData.filter(item => item.type === filtertype && item.location === filterloca && item.available <= filteravai)
        }
        else if (filtertype !== 'All' && filterloca === 'All' && filterprice !== 'All' && filteravai !== 'All') {
            filteredData = fakeData.filter(item => item.type === filtertype && item.rent <= filterprice && item.available <= filteravai)
        }
        else if (filtertype === 'All' && filterloca !== 'All' && filterprice !== 'All' && filteravai !== 'All') {
            filteredData = fakeData.filter(item => item.location === filterloca && item.rent <= filterprice && item.available <= filteravai)
        }
        else if (filtertype !== 'All' && filterloca !== 'All' && filterprice !== 'All' && filteravai !== 'All') {
            filteredData = fakeData.filter(item => item.type === filtertype && item.location === filterloca && item.rent <= filterprice && item.available <= filteravai)
        }
        else {
            filteredData = data;
        }
        setdata(filteredData)
    }



    useEffect(() => {
        filterItems()
    }, [filtertype, filterloca, filterprice, filteravai])

    return (

        <>
            {/* All the filter section  */}
            <div className='flex justify-center space-x-10 pt-10 sm:space-x-0 sm:items-center sm:space-y-2 sm:flex-col '>

                <select className='px-1 rounded-lg font-semibold text-violet-900 w-44 bg-violet-50 border border-solid border-violet-900 focus:text-gray-700 focus:bg-white  focus:outline-none py-2'
                    onChange={(e) => {
                        setfiltertype(e.target.value);
                    }}>
                    <option value='All' className='text-violet-900 text-sm font-bold '>All Type</option>
                    <option value='Flat' className='text-violet-900 text-sm font-bold '>Flat</option>
                    <option value='House' className='text-violet-900 text-sm font-bold '>House</option>
                </select>
                <select className='px-1 rounded-lg font-semibold text-violet-900 w-44 bg-violet-50 border border-solid border-violet-900 focus:text-gray-700 focus:bg-white focus:outline-none py-2'
                    onChange={(e) => {
                        setfilterloca(e.target.value)
                    }}>
                    <option value='All'>All Locations</option>
                    <option value='Bengaluru'>Bengaluru</option>
                    <option value='Noida'>Noida</option>
                    <option value='Pune'>Pune</option>
                </select>
                <select className='px-1 rounded-lg font-semibold text-violet-900 w-44 bg-violet-50 border border-solid border-violet-900 focus:text-gray-700 focus:bg-white focus:outline-none py-2'
                    onChange={(e) => {
                        setfilterprice(e.target.value)
                    }}>
                    <option value={35000}>less than 35000</option>
                    <option value={25000}>less than 25000</option>
                    <option value={15000}>less than 15000</option>
                </select>
                <select className='px-1 rounded-lg font-semibold text-violet-900 w-44 bg-violet-50 border border-solid border-violet-900 focus:text-gray-700 focus:bg-white focus:outline-none py-2'
                    onChange={(e) => {
                        setfilteravai(e.target.value)
                    }}>
                    <option value={60}>within 60 days</option>
                    <option value={45}>within 45 days</option>
                    <option value={30}>within 30 days</option>
                    <option value={15}>within 15 days</option>
                </select>
            </div>


            {/* The main grid Section */}
            <div className='flex justify-center'>
                <div className='grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1'>
                    {/* To render Card for all the fakeData values */}
                    {data.length !== 0 ? data.map((e, i) => {
                        return (
                            <div key={i} className=''>
                                <Card image={e.image} name={e.name} rent={e.rent} address={e.address}
                                    beds={e.beds} bathrooms={e.bathrooms} area={e.area} />
                            </div>
                        )
                    }) : <div className='flex justify-center'>
                        <p className='text-2xl mt-[50px]'>Sorry No properties found</p>
                    </div>}
                </div>
            </div>
        </>
    )
}
