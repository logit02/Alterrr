import './home.css'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
export default function Home(){
    const pdata = [
        {
            name: 'MongoDb',
            users: 11,
            jobs: 120
        },
        {
            name: 'Javascript',
            users: 15,
            jobs: 12
        },
        {
            name: 'PHP',
            users: 5,
            jobs: 10
        },
        {
            name: 'Java',
            users: 10,
            jobs: 5
        },
        {
            name: 'C#',
            users: 9,
            jobs: 4
        },
        {
            name: 'C++',
            users: 10,
            jobs: 8
        },
    ];
      
    return(
        <div className='home_wrapper'>
           <div className='metrics'>
                <div className='metric_1'>
                    <p className='new_users'>New Users</p>
                    <p className='value'>+20 users</p>
                </div>
                <div className='metric_2'>
                <p className='new_posts'>Post Traffic</p>
                <p className='traffic'>-5 views</p>
                </div>
                </div>
                <div id='containter_chart'>
                <ResponsiveContainer width="100%" aspect={3} height='60%'>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="users"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="jobs"
                        stroke="#9381FF" activeDot={{ r: 8 }} />
                </LineChart>
                </ResponsiveContainer>
            </div>
          
        </div>
    )
}



    
