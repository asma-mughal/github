function Card(props) {
    const { variant, extra, children, ...rest } = props;
    return (
      <div
        className={`!z-5 relative flex flex-col 
        rounded-[20px] bg-secondary-blue bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800
          dark:shadow-none ${extra}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
  
  export default Card;