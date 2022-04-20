import React, {useState, useEffect} from "react";
import Job from "./Job";

const Jobs = ({ data, setKeywords, keywords }) => {

    const [filteredData, setFilteredData] = useState([]);

    const modifiedData = () => {
      if (keywords.lenght > 0) {
        const newData = filteredData.filter(data => {
          return (
            keywords.every(key => {
              return (
                data.role == key || data.level == key || data.languages.includes(key) || data.tools.includes(key)
              )
            })
          )
        })

        setFilteredData(newData)
      } else {
        setFilteredData(data)
      }
    }


    useEffect(() => {
     modifiedData()
    }, [keywords])
    

  return (
    <div className="jobs">
      {
        filteredData.map((job) => {
          return <Job data={job} key={job.id} setKeywords={setKeywords}/>
        })
      }
    </div>
  );
};

export default Jobs;
