/* eslint-disable no-lone-blocks */
import "./Home.css";
import SideBar from "../../Components/SideBar/SideBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
// import Container from "react-bootstrap/Container";
import deleteIcon from "../../Assets/Icon/deleteIcon.svg";
import edit from "../../Assets/Icon/edit.svg";
import ReactApexChart from "react-apexcharts";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import add from "../../Assets/Icon/add.svg";

const Home = () => {
  const [serviceData, setServiceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const Navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data.data.services);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // return (
  //   <div>
  //     {data.map((service) => (
  //       <div key={service.id}>{service.servicename}</div>
  //     ))}
  //   </div>
  // )
  const deleteService = (id) => {
    fetch(`http://localhost:8000/api/services/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const updatedServiceData = serviceData.filter(
            (service) => service._id !== id
          );
          setServiceData(updatedServiceData);
        } else {
          console.error("Failed to delete service.");
        }
      })
      .catch((error) => {
        console.error("Error deleting service:", error);
      });
  };

  const state = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      colors: ["#62DFF0", "#ffffff"],
      chart: {
        height: 300,
        type: "area",
      },

      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.9,
          opacityTo: 0.4,
          stops: [0, 90, 100],
          gradientToColors: ["#62DFF0"],
          // optional, if not defined - uses the shades of same color in series
          inverseColors: false,
        },
      },
      stroke: {
        curve: "smooth",

        colors: ["#62DFF0", "#fffff"],
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  const state2 = {
    series: [44, 55, 41, 17],
    options: {
      labels: ["rawan", "rawan", "rawan", "rawan"],
      colors: ["#BEEEFF", "#62DFF0", "#A5FFC9", "#CFCBFF"],
      chart: {
        type: "donut",
      },

      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
        },
      },
      grid: {
        padding: {
          bottom: -80,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  const state3 = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],

    options: {
      colors: ["#62DFF0"],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },

      grid: {
        row: {
          colors: ["#EEFDFF", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },

    series4: [32, 22],
    options4: {
      colors: ["#62DFF0", "#CFCBFF"],
      chart: {
        type: "donut",
        width: 40,
        height: 40,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
      },
    },
  };

  return (
    <div>
      <div className=" home__container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="top">
          <SearchBar />
        </div>
        <div className="main">
          <h6 className="Services__category">Services category</h6>
          <div
            style={{ marginLeft: "49rem" }}
            className="addNew"
            onClick={() => Navigate("/create-service")}
          >
            <div>add new</div>
            <img src={add} alt="" style={{ width: "15px" }} />
          </div>
          <div className="service__list">
            <div className="service__list__title">
              <div>Category</div>
              <div>service Name</div>
              <div>Price</div>
              <div>Service Id</div>
              <div>Control</div>
            </div>
            <div className="service__data__container">
              {serviceData.map((service) => (
                <div className="service__data" key={service._id}>
                  <div>{service.category}</div>
                  <div>{service.servicename}</div>
                  <div>${service.servicePrice}</div>
                  <div>{service._id}</div>

                  <div className="service__icon__container">
                    <div>
                      <img
                        src={edit}
                        alt=""
                        onClick={() =>
                          Navigate("/edit-service", { state: service })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src={deleteIcon}
                        alt=""
                        onClick={() => deleteService(service._id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rigth_side">
          <div className="right__chart__card">
            <div className="child__chart__card">
              <div>Reviews</div>
              <div></div>
              <div>
                12,653 <span className="span"> services</span>
              </div>
            </div>
            <hr className="hr"></hr>
            <div id="donutChart">
              <ReactApexChart
                options={state2.options}
                series={state2.series}
                type="donut"
                height={350}
                width={420}
              />
            </div>
          </div>

          <div className="right__chart__card">
            <div className="child__chart__card">
              <div>Sign-ups</div>
              <div></div>
              <div>
                9,845 <span className="span"> past 30 days</span>
              </div>
            </div>
            <hr className="hr"></hr>
            <div id="chart">
              <ReactApexChart
                options={state3.options}
                series={state3.series}
                type="line"
                height={200}
              />
            </div>
          </div>

          {/* <div className='right__chart__card'>
            <div className='child__chart__card'>
            <div>Statistics</div>
                <div>Yearly </div>
                </div>
                <hr className='hr'></hr>
                <div id="chart-4">
                <ReactApexChart options={state3.options4} series={state3.series4} type="donut" height={150} width={150} />
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className='home__title'>Home</div> */
}
{
  /* <Container className='chart__card'>
                <div className='chart__label__container'>
                  <div className='left__chart'>
                  <div>sales 2023</div>
                  <div>$207k</div>
                  </div>
                  <div className='right__chart'>
                    <div>Daily</div>
                    <div>Weekly</div>
                    <div>Annualy</div>
                  </div>
                </div>
                <div id="chart">
  <ReactApexChart options={state.options} series={state.series} type="area" height={300} />
</div>
    
              {/* <Line options={options} data={data} className='line'/> */
}
{
  /* </Container> */
}
