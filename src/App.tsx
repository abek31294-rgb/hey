/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Differentiators } from './components/Differentiators';
import { MarketCatalog } from './components/MarketCatalog';
import { VisitSection } from './components/VisitSection';
import { StorySection } from './components/StorySection';
import { Footer } from './components/Footer';
import { MarketListDrawer } from './components/MarketListDrawer';
import { VisitModal } from './components/VisitModal';
import { MARKET_ITEMS } from './data/marketData';
import { MarketItem, ListItem } from './types';

const STORAGE_KEY = 'hye_market_visit_list_v1';

export default function App() {
  const [listItems, setListItems] = useState<ListItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    // Pre-populate with our verified differentiators for an immediate warm experience
    const initialLavash = MARKET_ITEMS.find((i) => i.id === 'lavash-fresh-traditional');
    const initialCandy = MARKET_ITEMS.find((i) => i.id === 'candy-lokum-pistachio');
    const items: ListItem[] = [];
    if (initialLavash) {
      items.push({ item: initialLavash, quantity: 1, checked: false });
    }
    if (initialCandy) {
      items.push({ item: initialCandy, quantity: 1, checked: false });
    }
    return items;
  });

  const [isListDrawerOpen, setIsListDrawerOpen] = useState(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(listItems));
    } catch {
      // ignore
    }
  }, [listItems]);

  const handleAddToList = (item: MarketItem) => {
    setListItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1, checked: false }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setListItems((prev) =>
      prev
        .map((i) => {
          if (i.item.id === id) {
            const nextQty = i.quantity + delta;
            return nextQty > 0 ? { ...i, quantity: nextQty } : null;
          }
          return i;
        })
        .filter((i): i is ListItem => i !== null)
    );
  };

  const handleToggleChecked = (id: string) => {
    setListItems((prev) =>
      prev.map((i) =>
        i.item.id === id ? { ...i, checked: !i.checked } : i
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setListItems((prev) => prev.filter((i) => i.item.id !== id));
  };

  const handleClearList = () => {
    setListItems([]);
  };

  const handleAddCustomItem = (name: string) => {
    const customItem: MarketItem = {
      id: `custom-${Date.now()}`,
      name,
      category: 'pantry',
      description: 'Personal grocery note',
      origin: 'Customer Note',
      packagingNote: 'Inquire in store',
      highlights: ['Custom item for in-store visit'],
    };
    setListItems((prev) => [...prev, { item: customItem, quantity: 1, checked: false }]);
  };

  const isItemInList = (id: string) => {
    return listItems.some((i) => i.item.id === id);
  };

  const totalListCount = listItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const lavashItem = MARKET_ITEMS.find((i) => i.id === 'lavash-fresh-traditional') || MARKET_ITEMS[0];
  const candyItem = MARKET_ITEMS.find((i) => i.id === 'candy-lokum-pistachio') || MARKET_ITEMS[1];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F4] text-[#162E23]">
      {/* Top Header */}
      <Header
        totalListItems={totalListCount}
        onOpenList={() => setIsListDrawerOpen(true)}
        onOpenContact={() => setIsVisitModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Storefront Hero */}
        <Hero onOpenVisitModal={() => setIsVisitModalOpen(true)} />

        {/* Verified Differentiators: Fresh Lavash & Imported Candies */}
        <Differentiators
          onAddToList={handleAddToList}
          isItemInList={isItemInList}
          lavashItem={lavashItem}
          candyItem={candyItem}
        />

        {/* Curated Market Provisions Catalog with Live Search & Category Tabs */}
        <MarketCatalog
          items={MARKET_ITEMS}
          onAddToList={handleAddToList}
          isItemInList={isItemInList}
        />

        {/* Location, Directions & Store Concierge */}
        <VisitSection />

        {/* Armenian Heritage & Community Story */}
        <StorySection />
      </main>

      {/* Sophisticated Footer */}
      <Footer />

      {/* Interactive Market Visit List Drawer */}
      <MarketListDrawer
        isOpen={isListDrawerOpen}
        onClose={() => setIsListDrawerOpen(false)}
        items={listItems}
        onUpdateQuantity={handleUpdateQuantity}
        onToggleChecked={handleToggleChecked}
        onRemoveItem={handleRemoveItem}
        onClearList={handleClearList}
        onAddCustomItem={handleAddCustomItem}
      />

      {/* Interactive Visit / Direct Call Modal */}
      <VisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />
    </div>
  );
}
