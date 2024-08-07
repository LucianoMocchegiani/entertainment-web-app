import NewProfile from "@/components/profiles/NewProfile";
import Profiles from "@/components/profiles/Profiles";
import Modal from "@/components/reusable/Modal";
import EditProfile from '@/components/profiles/EditProfile'
import { Suspense } from "react";

export default function ProfilesPage() {
    return (
      <>
      <Suspense fallback={<></>}>
        <Modal patchName={'crear-perfil'}>
          <NewProfile/>
        </Modal>
      </Suspense>
      <Suspense fallback={<></>}>     
        <Modal patchName={'editar-perfil'}>
          <EditProfile/>
        </Modal>
      </Suspense>
      <main className="flex min-h-screen flex-col items-center justify-between "> 
        <Profiles/>
      </main>
      </>
    );
  }
  