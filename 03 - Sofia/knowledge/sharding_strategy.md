# Strategy: Documentation Sharding

As the Architect, you must ensure documentation remains maintainable and fits within AI context limits.

## When to Shard
- **Inventory > 500 lines:** Split into modules.
- **Multiple Domains:** Separate by domain (e.g., Auth, Payments, Users).

## Sharding Pattern for Inventory
Instead of one giant `inventario_database.md`, organize as:
1.  `inventario_master.md`: Index and global links.
2.  `inventario_core.md`: `users`, `auth`, `roles`.
3.  `inventario_[feature].md`: Specific tables for a feature (e.g., `inventario_marketplace.md`).

## Integration
- Ensure Foreign Keys across shards are clearly documented.
- The `inventario_master.md` acts as the map for other agents.
