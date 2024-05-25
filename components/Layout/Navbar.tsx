import ButtonOpenTodoModal from "@/components/Modals/ButtonOpenTodoModal";
import { SwitchMode } from "@/components/ui/SwitchMode";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="flex items-center gap-2 justify-end py-7">
      <h2 className="me-auto text-2xl font-semibold">TODO</h2>

      <SwitchMode />
      <ButtonOpenTodoModal />
      <div className="flex items-center min-w-[28px] min-h-[24px]">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </nav>
  );
}

export default Navbar;
