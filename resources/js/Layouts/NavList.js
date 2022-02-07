import NavLink from '@/Components/NavLink';
export default function NavList({role_id}){
  console.log(role_id,'role_id')
  if(role_id === 1){
    return(
      <>
        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
          Home
        </NavLink>
        <NavLink href={route('roles')} active={route().current('roles')}>
          Roles
        </NavLink>
        <NavLink href={route('items')} active={route().current('items')}>
          Items
        </NavLink>
        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
          Users
        </NavLink>
      </>
    )
  }

  return (
    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
      Dashboard
    </NavLink>
  )
}