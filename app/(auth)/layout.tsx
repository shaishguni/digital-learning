const AuthLayout = ({children}:{children:React.ReactNode})=>{
    return(
        <div className="mt-36 items-center">
        <div className="h-full flex  justify-center">
            {children}
        </div>
    </div>
    )
}
export default AuthLayout