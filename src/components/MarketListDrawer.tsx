import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Check, Copy, Printer, ShoppingBag, ExternalLink } from 'lucide-react';
import { ListItem } from '../types';

interface MarketListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ListItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onToggleChecked: (id: string) => void;
  onRemoveItem: (id: string) => void;
  onClearList: () => void;
  onAddCustomItem: (name: string) => void;
}

export const MarketListDrawer: React.FC<MarketListDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onToggleChecked,
  onRemoveItem,
  onClearList,
  onAddCustomItem,
}) => {
  const [customItemText, setCustomItemText] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalItemCount = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const completedCount = items.filter((i) => i.checked).length;

  const handleCopyList = () => {
    if (items.length === 0) return;
    const textLines = [
      'HYE MARKET VISIT LIST (2012 W Bullard Ave, Fresno)',
      'Phone: (559) 448-9791',
      '----------------------------------------',
      ...items.map(
        (i) =>
          `[${i.checked ? 'X' : ' '}] ${i.quantity}x ${i.item.name} (${i.item.packagingNote})`
      ),
      '----------------------------------------',
      'Fresh Lavash & Imported Confections',
    ].join('\n');

    navigator.clipboard.writeText(textLines).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (customItemText.trim()) {
      onAddCustomItem(customItemText.trim());
      setCustomItemText('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF9F4] text-[#162E23] shadow-2xl flex flex-col border-l border-[#162E23]/15">
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#162E23]/10 bg-[#F4EFE6] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#162E23] text-[#D8BC93] rounded">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#162E23]">
                  Market Visit List
                </h3>
                <p className="text-xs text-[#162E23]/70">
                  {items.length === 0
                    ? 'Your planner is empty'
                    : `${items.length} items (${completedCount} checked in-store)`}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#162E23]/60 hover:text-[#162E23] rounded-md transition-colors"
              aria-label="Close shopping list"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Add Custom Item Form */}
          <form
            onSubmit={handleAddCustom}
            className="p-4 border-b border-[#162E23]/10 bg-[#FBF9F4] flex gap-2"
          >
            <input
              type="text"
              value={customItemText}
              onChange={(e) => setCustomItemText(e.target.value)}
              placeholder="Add personal market note or item..."
              className="flex-1 px-3 py-1.5 text-xs bg-white border border-[#162E23]/20 rounded text-[#162E23] placeholder-[#162E23]/40 focus:outline-none focus:ring-1 focus:ring-[#162E23]"
            />
            <button
              type="submit"
              className="px-3 py-1.5 text-xs font-semibold bg-[#162E23] text-[#FBF9F4] rounded hover:bg-[#234737] transition-colors whitespace-nowrap"
            >
              Add
            </button>
          </form>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="font-serif text-base text-[#162E23]/80">
                  No items in your visit list yet.
                </p>
                <p className="text-xs text-[#162E23]/60 max-w-xs mx-auto">
                  Click &ldquo;Add to List&rdquo; on Fresh Lavash, Imported Lokum, or pantry staples to build your in-store checklist.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map(({ item, quantity, checked }) => (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-lg border transition-all flex items-start justify-between gap-3 ${
                      checked
                        ? 'bg-[#EAE3D2]/50 border-black/5 opacity-70'
                        : 'bg-white border-[#162E23]/10 shadow-2xs'
                    }`}
                  >
                    {/* Checkbox */}
                    <button
                      onClick={() => onToggleChecked(item.id)}
                      className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                        checked
                          ? 'bg-[#162E23] border-[#162E23] text-white'
                          : 'border-[#162E23]/30 hover:border-[#162E23]'
                      }`}
                      aria-label={`Toggle checked state for ${item.name}`}
                    >
                      {checked && <Check className="w-3 h-3 stroke-[3]" />}
                    </button>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div
                        className={`text-xs font-medium ${
                          checked ? 'line-through text-[#162E23]/50' : 'text-[#162E23]'
                        }`}
                      >
                        {item.name}
                      </div>
                      <div className="text-[11px] text-[#162E23]/60 truncate">
                        {item.packagingNote}
                      </div>
                    </div>

                    {/* Stepper & Delete */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center border border-[#162E23]/15 rounded bg-[#FBF9F4]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 hover:text-[#162E23] text-[#162E23]/70"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold tabular-nums">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 hover:text-[#162E23] text-[#162E23]/70"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-[#162E23]/40 hover:text-red-700 transition-colors"
                        aria-label={`Remove ${item.name} from list`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Actions Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#162E23]/10 bg-[#F4EFE6] space-y-3">
              <div className="flex items-center justify-between text-xs text-[#162E23]/80">
                <span>Total Items Selected:</span>
                <span className="font-semibold tabular-nums text-sm">{totalItemCount}</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopyList}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium border border-[#162E23]/20 bg-white hover:bg-[#FBF9F4] rounded transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-700" />
                      <span className="text-green-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Copy List</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium border border-[#162E23]/20 bg-white hover:bg-[#FBF9F4] rounded transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Print Checklist</span>
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={onClearList}
                  className="text-[11px] text-[#162E23]/50 hover:text-red-700 underline"
                >
                  Clear all items
                </button>

                <a
                  href="https://maps.google.com/?q=2012+W+Bullard+Ave,+Fresno,+CA+93711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#162E23] hover:text-[#234737]"
                >
                  <span>Directions to Bullard Ave</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
