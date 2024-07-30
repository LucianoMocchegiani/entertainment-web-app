import NewProfile from "@/components/profiles/NewProfile";
import Profiles from "@/components/profiles/Profiles";
import Modal from "@/components/reusable/Modal";
import EditProfile from '@/components/profiles/EditProfile'

export default function ProfilesPage() {
    return (
      <>
      <Modal patchName={'crear-perfil'}>
        <NewProfile/>
      </Modal>
      <Modal patchName={'editar-perfil'}>
        <EditProfile/>
      </Modal>
      <main className="flex min-h-screen flex-col items-center justify-between "> 
        <Profiles/>
      </main>
      </>
    );
  }
  