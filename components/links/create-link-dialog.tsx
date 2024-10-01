"use client";

import { createLinkAction } from "@/lib/actions/links/create-link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { nunito } from "@/app/ui/fonts";
import { useState } from "react";
import { IconCircleCheck } from "@tabler/icons-react";
import { toast } from "sonner";

// NOTE: For now anonymous link creation through form is disabled
export default function CreateLinkDialog({ userId }: { userId?: string; }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* TODO: Customize from the source instead */}
      <DialogTrigger asChild>
        <button className="flex items-center tracking-tight h-[40px] bg-[#181818] rounded-full text-[#FAFAFA] font-semibold p-3">New Link</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-[#181818]">
        <DialogHeader>
          <DialogTitle className={`${nunito.className} text-2xl`}>Create Link</DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <form
          action={createLinkAction}
          onSubmit={(e) => {
            setOpen(false);
            // TODO: Hardcoded toast
            // Always omit successful message
            toast(
              <div className="flex items-center gap-1">
                <IconCircleCheck fill="true" size={20} strokeWidth={1.75} className="fill-blue-500 text-white" />
                <span className="font-medium">Successfully created link</span>
              </div>
            );
          }}>
          <div className="grid gap-4 py-4 font-medium">
            <div className="grid gap-2">
              <label htmlFor="url" className="text-left text-[#575757]">
                Destination URL
              </label>
              <input
                id="url"
                name="url"
                placeholder="https://your.app/home"
                className="w-full p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3]"
                required
                type="url"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="slug" className="text-left text-[#575757]">
                Short Link
              </label>
              <input
                id="slug"
                name="slug"
                placeholder="Required for now"
                className="w-full p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3]"
                required
              />
              <input type="hidden" name="userId" value={userId} />
            </div>
          </div>
          <DialogFooter>
            <button
              className="flex items-center tracking-tight h-[40px] bg-[#181818] rounded-full text-[#FAFAFA] font-semibold p-3"
              type="submit">Create</button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}