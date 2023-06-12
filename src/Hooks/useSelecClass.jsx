import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'


const useSelectedClass = () =>{
const {user , loading} = useAuth()
const token = localStorage.getItem('access-token')

const {  data: selectedclass=[],refetch } = useQuery({
    queryKey: ['selectedclass', user?.email],
    enabled: !loading,

  queryFn: async()=>{
        const response = await fetch(`    https://musicits-server.vercel.app/selectedclass?email=${user?.email}`,
        {headers: {
          authorization : `bearer ${token}`
        }})
        return response.json()
    },  
  })
  return [selectedclass, refetch]

}
export default useSelectedClass

