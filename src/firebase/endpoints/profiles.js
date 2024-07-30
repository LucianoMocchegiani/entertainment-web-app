import { doc , getDoc, addDoc, setDoc, Timestamp, collection} from 'firebase/firestore';
import { db } from '../firebase';
 
export const postProfile=  async (dataEntry)=>{
    try{
        let response = { success:false, message:'Reintente nuevamente en unos momentos' };
        const { name, userStorage, avatar} = dataEntry
        let data = { 
            account_id:userStorage.id, 
            name:name, 
            avatar:avatar?avatar:'',
            my_list_movies:[], 
            my_list_series:[], 
            finishied_movies:[], 
            finishied_series:[],
            whaching_now:[], 
            keep_watching_series:[],
            keep_watching_movies:[],
            whaching_now_series:[],
            whaching_now_movies:[],
            last_conection:Timestamp.now(),
            online:false,
            created_date:Timestamp.now(),
            updated_date:Timestamp.now() 
        }
        const selectedCollection = collection(db, `profiles`);
        const resolved = await addDoc(selectedCollection, data)
        const id = resolved._key.path.segments[1]
        const selectedDoc = doc(db, `users/${userStorage.id}`);
        const updatedData= {
            ...userStorage,
            profiles: [...userStorage.profiles, {id:id, name:name}]
        }
        const resolvedDoc = await setDoc(selectedDoc, updatedData)
        response = { success:true, message:'Perfil creado', data: resolved};
        return response
    }catch(error){
        let response = { success:false, message:error.message, };
        console.log(response)
        return response
    }
}

export const putProfile=  async (data)=>{
    try{
        let response = { success:false, message:'Reintente nuevamente en unos momentos' };
        const { name, account_id, id, my_list_movies, my_list_series, finishied_movies, finishied_series, keep_watching_series, keep_watching_movies, whaching_now_series, whaching_now_movies, created_date, last_conection, online} = data
        
        data = { 
            id: id,
            account_id:account_id, 
            name:name, 
            my_list_movies:my_list_movies, 
            my_list_series:my_list_series, 
            finishied_movies:finishied_movies, 
            finishied_series:finishied_series,
            keep_watching_series:keep_watching_series,
            keep_watching_movies:keep_watching_movies,
            whaching_now_series:whaching_now_series,
            whaching_now_movies:whaching_now_movies,
            created_date:created_date,
            last_conection:Timestamp.now(),
            online:online,
            updated_date:Timestamp.now() 
        }
        const selectedDoc = doc(db, `profiles/${id}`);
        const resolved = await setDoc(selectedDoc, data)
        
        response = { success:true, message:'Perfil Actualizado', data: resolved};
        return response
    }catch(error){
        let response = { success:false, message:error.message, };
        console.log({errorIn:'putProfile',...response})
        return response
    }
}

export const putProfileAndUser=  async (data, userData)=>{
    console.log('data---> ', data)
    console.log('userData---> ', { ...userData, profiles:[...userData.profiles.filter(e=>e.id !== data.id), {id:data.id, name:data.name, avatar:data.avatar} ], updated_date:Timestamp.now()})
    try{
        let response = { success:false, message:'Reintente nuevamente en unos momentos' };
        const { name, account_id, id, my_list_movies, my_list_series, finishied_movies, finishied_series, keep_watching_series, keep_watching_movies, whaching_now_series, whaching_now_movies, created_date, last_conection, online, avatar} = data
        data = { 
            id: id,
            account_id:account_id, 
            name:name, 
            my_list_movies:my_list_movies, 
            my_list_series:my_list_series, 
            finishied_movies:finishied_movies, 
            finishied_series:finishied_series,
            keep_watching_series:keep_watching_series,
            keep_watching_movies:keep_watching_movies,
            whaching_now_series:whaching_now_series,
            whaching_now_movies:whaching_now_movies,
            created_date:created_date,
            last_conection:Timestamp.now(),
            online:online,
            updated_date:Timestamp.now() 
        }
        const selectedDoc = doc(db, `profiles/${id}`);
        const resolved = await setDoc(selectedDoc, data)
        const {dni, password, fatture, email, location, plan, rented} = userData
        const profiles= [...userData.profiles.filter(e=>e.id !== id), {id:id, name:name, avatar:avatar?avatar:''} ]
        userData =    {
            id:userData.id?userData.id:'',
            dni:dni?dni:'',
            password:password?password:'',
            fatture:fatture?fatture:[],
            name:userData.name?userData.name:'',
            email:email?email:'',
            location:location?location:'',
            plan:plan?plan:'',
            profiles:profiles?profiles:[],
            rented:rented?rented:[],
            online:userData.online?userData.online:false,
            last_conection:userData.last_conection?userData.last_conection:Timestamp.now(),
            updated_date:Timestamp.now(), 
            created_date:userData.created_date?userData.created_date:Timestamp.now(),
        }
        let userId = userData.id.replace("%40",'@')
        const selectedDocUser = doc(db, `users/${userId}`);
        const resolvedUser = await setDoc(selectedDocUser, userData)
        response = {success: true, message:'Se actualizo el usuario y el perfil', data:resolved, userData:resolvedUser}
        
        return response
    }catch(error){
        let response = { success:false, message:error.message, };
        console.log({errorIn:'putProfileAndUser',...response})
        return response
    }
}

export const getProfile=  async (id)=>{
    try {
        let response = { success:false, message:'Reintente nuevamente en unos momentos' };
        const selectedDoc = doc(db, 'profiles/'+id)

        const requestSnapshotCache = await getDoc(selectedDoc, { source: 'cache' })
        if (requestSnapshotCache.exists()){
            const movieData = { ...requestSnapshotCache.data(), id: requestSnapshotCache.id };
            response = { success:true, message:`Cache: Datos obtenidos del perfil ${id}`, data: movieData};
        }else{
            const requestSnapshot = await getDoc(selectedDoc)
            if(requestSnapshotCache.exists()){
                const movieData = { ...requestSnapshot.data(), id: requestSnapshot.id };
                response = { success:true, message:`Servidor: Datos obtenidos del perfil ${id}`, data: movieData};
            }else{
                response = { success:false, message:`No existe el perfil ${id}`, data:null};
            }
        }
        return response
    } catch (error) {
        let response = { success:false, message:error.message };
        console.log(response)
        return response
    }
}