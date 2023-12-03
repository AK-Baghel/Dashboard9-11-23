import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
export const Context = createContext();

function AppContext({ children }) {
    const [fetchData, setFetchData] = useState([]);
    const [totalComplaint, setTotalComplaint] = useState(0)
    const [resolvedComplaint, setResolvedComplaint] = useState(0)
    const [pendingComplaint, setPendingComplaint] = useState(0)
    const [male, setMale] = useState(0)
    const [female, setFemale] = useState(0)
    const [day1, setday1] = useState([])
    const [day2, setday2] = useState([])
    const [day3, setday3] = useState([])
    const [day4, setday4] = useState([])
    const [day5, setday5] = useState([])
    const [moreThan5Days, setMoreThan5Days] = useState([]);
    const [showDashboard, setShowDashboard] = useState(true)
    // const [yesLogin, setYesLogin] = useState(false)

    // const toggleLogin = (value) => {
    //     setYesLogin(value)
    // }

    const showDashboardHandle = () => {
        setShowDashboard(!showDashboard);
    }

    const getData = async () => {
        try {
            const data = await fetch('http://localhost:8080/vamani');
            const result = await data.json();
            setFetchData([...result]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const counter = () => {
        let total = fetchData.length;

        setTotalComplaint(fetchData.length)

        const arr = fetchData.filter((item) => {
            return (
                item.comp_close !== "Resolved"
            )
        })
        setPendingComplaint(arr.length);
        setResolvedComplaint(total - arr.length);

        const maleArr = fetchData.filter((item) => {
            return (
                item.comp_emp_gender === 1
            )
        })
        setMale(maleArr.length)
        setFemale(total - maleArr.length)

        const day1arr = fetchData.filter((item) => {
            return (
                item.comp_resolve_day === 1
            )
        })
        setday1(day1arr.length)

        const day2arr = fetchData.filter((item) => {
            return (
                item.comp_resolve_day === 2
            )
        })
        setday2(day2arr.length)

        const day3arr = fetchData.filter((item) => {
            return (
                item.comp_resolve_day === 3
            )
        })
        setday3(day3arr.length)

        const day4arr = fetchData.filter((item) => {
            return (
                item.comp_resolve_day === 4
            )
        })
        setday4(day4arr.length)

        const day5arr = fetchData.filter((item) => {
            return (
                item.comp_resolve_day === 5
            )
        })
        setday5(day5arr.length)

        const moreThan5Dayarr = fetchData.filter((item) => {
            return (
                item.comp_resolve_day > 5
            )
        })
        setMoreThan5Days(moreThan5Dayarr.length)

    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        counter();
    }, [fetchData]);

    // console.log("hello", fetchData);
    // console.log("tc= ", totalComplaint);
    // console.log("RC= ", resolvedComplaint);
    // console.log("PC= ", pendingComplaint);
    // console.log("Male= ", male);
    // console.log("Female= ", female);
    // console.log("Day1", day1);
    // console.log("Day2", day2);
    // console.log("Day3", day3);
    // console.log("Day4", day4);
    // console.log("Day5", day5);
    // console.log("More than 5", moreThan5Days);

    return (
        <Context.Provider value={
            { showDashboard, showDashboardHandle, resolvedComplaint, pendingComplaint, totalComplaint, male, female, day1, day2, day3, day4, day5, moreThan5Days }
        }>
            {children}
        </Context.Provider>
    )
}

export default AppContext