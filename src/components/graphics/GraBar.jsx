
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import "./GraphicsStyle.css";

const GraBar = ({data}) => {

    const options = {
      plugins: {
        legend: {
          display: false
        }
      }
    }
  return (
    <div className='styles bar'>
        <Bar data={data} options={options}/>
    </div>
  )
}

export default GraBar