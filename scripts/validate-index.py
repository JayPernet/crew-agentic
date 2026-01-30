#!/usr/bin/env python3
"""
Valida o INDEX.yaml da base de conhecimento.
Verifica se todos os arquivos referenciados existem fisicamente.
"""

import os
import sys
import yaml
from pathlib import Path

def validate_index():
    """Valida o INDEX.yaml"""
    kb_path = Path("global_knowledge")
    index_path = kb_path / "INDEX.yaml"
    
    if not index_path.exists():
        print(f"❌ INDEX.yaml não encontrado em {index_path}")
        return False
    
    print(f"📖 Lendo {index_path}...")
    with open(index_path, 'r', encoding='utf-8') as f:
        index = yaml.safe_load(f)
    
    total_files = 0
    missing_files = []
    found_files = []
    
    print("\n🔍 Validando arquivos por role...\n")
    
    for role, data in index.get('roles', {}).items():
        print(f"📋 Role: {role} ({data.get('description', 'N/A')})")
        mandatory_reading = data.get('mandatory_reading', [])
        
        for file_entry in mandatory_reading:
            total_files += 1
            file_path = kb_path / file_entry['path']
            purpose = file_entry.get('purpose', 'N/A')
            
            if file_path.exists():
                found_files.append(str(file_path))
                print(f"  ✅ {file_entry['path']}")
            else:
                missing_files.append({
                    'role': role,
                    'path': file_entry['path'],
                    'purpose': purpose
                })
                print(f"  ❌ MISSING: {file_entry['path']}")
                print(f"     Purpose: {purpose}")
        
        print()
    
    # Summary
    print("=" * 80)
    print(f"\n📊 RESUMO DA VALIDAÇÃO\n")
    print(f"Total de arquivos referenciados: {total_files}")
    print(f"Arquivos encontrados: {len(found_files)}")
    print(f"Arquivos faltando: {len(missing_files)}")
    
    if missing_files:
        print(f"\n⚠️  ARQUIVOS FALTANDO ({len(missing_files)}):\n")
        for item in missing_files:
            print(f"  Role: {item['role']}")
            print(f"  Path: {item['path']}")
            print(f"  Purpose: {item['purpose']}")
            print()
        return False
    else:
        print("\n✅ Todos os arquivos foram encontrados!")
        return True

if __name__ == "__main__":
    success = validate_index()
    sys.exit(0 if success else 1)
