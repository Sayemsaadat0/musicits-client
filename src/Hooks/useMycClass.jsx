import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
// import useAxios from './useAxios'


const useMyClass = () =>{
const {user , loading} = useAuth()
const token = localStorage.getItem('access-token')
// const [axiosSecure] = useAxios

const {  data: MyClass=[],refetch } = useQuery({
    queryKey: ['MyClass', user?.email],
    enabled: !loading,

  queryFn: async()=>{
        const response = await fetch(`     https://musicits-server.vercel.app/manageclass?email=${user?.email}`,
        {headers: {
          authorization : `bearer ${token}`
        }})
        return response.json()
    },  
  })
  return [MyClass, refetch]

}
export default useMyClass