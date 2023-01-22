import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import "./GraphicsStyle.css";

const GraDoughnut = ({data}) => {

  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
};

  return (
    <div className='styles Doughnut'>
    <Doughnut data={data} options={options}/>
    </div>
  )
}

export default GraDoughnut