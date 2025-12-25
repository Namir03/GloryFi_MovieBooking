const BlurCircle = ({top = "auto", left = "auto", right = "auto", bottom = "auto"}) => {
  return (
    <div className="absolute z-0 h-56 w-56 rounded-full bg-[rgb(255_0_0/0.4)] blur-3xl pointer-events-none" 
    style={{top: top, left: left, right: right, bottom: bottom}}>
    </div>
  )
}

export default BlurCircle