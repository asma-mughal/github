import Card from '../Card';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CloudCircle from '@mui/icons-material/CloudCircle';
const Widget = ({ icon, title, subtitle,value,colorCard }) => {
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px]">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full  p-4 dark:bg-navy-700">
          <span className="flex items-center text-brand-500  p-3 rounded-md
          dark:text-white"
          style={{
            backgroundColor:'#3D4268'
          }}
          >
            <AccountCircleOutlinedIcon style={{ fontSize: 19, color:'white' }} />
          </span>
        </div>
      </div>

      <div className="h-50 ml-1 flex w-auto flex-col justify-center">
    <p className="text-xs text-white">{title}</p>
    <h4 className="text-xs font-semibold mt-1 text-white dark:text-white">
      {subtitle} <CloudCircle style={{ fontSize: 14, marginLeft: '4px', color:`${colorCard}` }} />
      {' '}
    <span style={{
      color:`${colorCard}`
    }}>{"+" + value + "%"}</span>
    </h4>
  </div>
    </Card>
  );
};

export default Widget;
