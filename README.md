# Portfolio-Bento-UI

Portfolio digitale ad alte prestazioni con layout Bento UI. Progettato in React puro con CSS Modules per esporre competenze Backend (Java, Spring Boot) e DevOps (Docker, Cloud). Architettura modulare container-ready.

## Architettura e Divisione del Progetto

Il progetto è strutturato ad assetto aziendale e diviso nei seguenti macro-componenti e moduli:

1. **Configurazione Centralizzata (`src/config/` e `src/styles/`)**
   - `content.js`: Singola fonte di verità per testi, metriche e collegamenti.
   - `theme.css`: Gestione centralizzata di colori, costanti geometriche ed effetti tridimensionali (box-shadow multilivello).

2. **Layout Core (`src/components/`)**
   - Contenitore Bento Grid responsivo (3 colonne desktop, 1 colonna mobile).

3. **Moduli Funzionali (Card)**
   - **Profilo & Bio Card**: Presentazione e tagline del ruolo.
   - **Esperienza & Formazione Card**: Timeline testuale (ITS-ICT Academy e ONYX TECHNOLOGY srl).
   - **Folder UI Progetti**: Griglia interna per l'esposizione di progetti backend (Dev-Inventory-Cloud, MyTrainUp, AgendaSync) con diagrammi e snippet.
   - **Action Bar**: Area contatti, link social (LinkedIn, GitHub) e gestione download CV in PDF.

4. **Infrastruttura (DevOps)**
   - Dockerfile multi-stage per il build e il serving statico tramite Nginx.
