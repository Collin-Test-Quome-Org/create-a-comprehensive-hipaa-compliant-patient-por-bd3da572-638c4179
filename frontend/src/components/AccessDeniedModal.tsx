// AccessDeniedModal.tsx
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export function AccessDeniedModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md text-center">
        <DialogHeader className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-2 mx-auto">
            <AlertTriangle className="text-red-500 w-8 h-8" />
          </span>
          <DialogTitle className="text-xl font-bold text-red-700">Access Denied</DialogTitle>
        </DialogHeader>
        <div className="text-gray-700 mt-2 mb-6">
          Oops! You don’t have permission to access this page. If you think this is a mistake, please contact your administrator.
        </div>
        <DialogFooter>
          <Button id="access-denied-close-btn" variant="primary" onClick={onClose}>Go Back</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
