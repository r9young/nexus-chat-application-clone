// src/app/reacthooks/page.tsx
'use client';

import ParentWithCallback from './components/ParentWithCallback';
import ParentWithoutCallback from './components/ParentWithoutCallback';

export default function ReactHooksPage() {
  return (
    <div className="p-4 space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-4">Without useCallback</h2>
        <ParentWithoutCallback />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">With useCallback</h2>
        <ParentWithCallback />
      </section>
    </div>
  );
}
