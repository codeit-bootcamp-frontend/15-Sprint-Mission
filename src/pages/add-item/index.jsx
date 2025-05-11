import NavBar from '../../components/NavBar';
import AddItemForm from './components/AddItemForm';

export default function AddItem() {
  return (
    <>
      <NavBar />
      <div className='bg-white min-h-screen'>
        <div className='container mx-auto px-[1.6rem] md:px-[2.4rem] py-6 max-w-[120rem] mt-[2.4rem]'>
          <AddItemForm />
        </div>
      </div>
    </>
  );
}
