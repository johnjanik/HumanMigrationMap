// Y-Haplogroup Migration Data
// Extracted from yhap_complete_animation_fixed.r
// 275,000 years of human paternal lineage movement

export interface MigrationEvent {
  time_kya: number;
  parent: string;
  child: string;
  event_type: string;
  parent_lat: number;
  parent_lon: number;
  child_lat: number;
  child_lon: number;
  color: string;
  description: string;
}

export const migrationEvents: MigrationEvent[] = [
  // ========== DEEPEST AFRICAN ROOTS (275-200 kya) ==========
  { time_kya: 275, parent: "Root", child: "A00", event_type: "origin", parent_lat: -5, parent_lon: 35, child_lat: 5.3, child_lon: 9.9, color: "#8B0000", description: "A00 - Oldest known Y lineage (Cameroon)" },
  { time_kya: 254, parent: "Root", child: "Y-Adam", event_type: "origin", parent_lat: -5, parent_lon: 35, child_lat: -10, child_lon: 35, color: "#800000", description: "Y-chromosomal Adam (E/S Africa)" },
  { time_kya: 200, parent: "Y-Adam", child: "A0", event_type: "split", parent_lat: -10, parent_lon: 35, child_lat: 10, child_lon: 15, color: "#CD5C5C", description: "A0 emerges (Central/NW Africa)" },
  { time_kya: 200, parent: "Y-Adam", child: "A1", event_type: "split", parent_lat: -10, parent_lon: 35, child_lat: -5, child_lon: 20, color: "#DC143C", description: "A1 diversification" },
  { time_kya: 200, parent: "A1", child: "A1a", event_type: "branch", parent_lat: -5, parent_lon: 20, child_lat: 0, child_lon: 25, color: "#FF0000", description: "A1a branch (Various African)" },
  { time_kya: 200, parent: "A1", child: "A1b", event_type: "branch", parent_lat: -5, parent_lon: 20, child_lat: 0, child_lon: 25, color: "#FF6347", description: "A1b widespread Africa" },

  // ========== BT MACROHAPLOGROUP (105 kya) ==========
  { time_kya: 105, parent: "Y-Adam", child: "BT", event_type: "split", parent_lat: -10, parent_lon: 35, child_lat: 5, child_lon: 38, color: "#4B0082", description: "BT macrohaplogroup emerges" },
  { time_kya: 75, parent: "BT", child: "B", event_type: "branch", parent_lat: 5, parent_lon: 38, child_lat: -15, child_lon: 25, color: "#8B4513", description: "B in Sub-Saharan Africa" },
  { time_kya: 70, parent: "B", child: "B2", event_type: "branch", parent_lat: -15, parent_lon: 25, child_lat: 0, child_lon: 18, color: "#A0522D", description: "B2 Pygmy populations" },

  // ========== CT - OUT OF AFRICA (78-68 kya) ==========
  { time_kya: 78, parent: "BT", child: "CT", event_type: "critical", parent_lat: 5, parent_lon: 38, child_lat: 30, child_lon: 35, color: "#FFD700", description: "CT - Out of Africa event" },

  // ========== DE SPLIT (73-72 kya) ==========
  { time_kya: 73, parent: "CT", child: "DE", event_type: "split", parent_lat: 30, parent_lon: 35, child_lat: 18, child_lon: 45, color: "#4169E1", description: "DE divergence ~73 kya" },

  // D - Eastern route to Asia via southern coastal route
  { time_kya: 66, parent: "DE", child: "D", event_type: "migration", parent_lat: 18, parent_lon: 45, child_lat: 25, child_lon: 100, color: "#FFD700", description: "D to SE Asia via southern route" },
  { time_kya: 60, parent: "D", child: "D-SEAsia", event_type: "branch", parent_lat: 25, parent_lon: 100, child_lat: 10, child_lon: 110, color: "#FFD700", description: "D diversification in SE Asia" },
  { time_kya: 50, parent: "D-SEAsia", child: "D1a1", event_type: "branch", parent_lat: 10, parent_lon: 110, child_lat: 29, child_lon: 84, color: "#FFD700", description: "D1a1 (D-M15) to Tibet" },
  { time_kya: 32.5, parent: "DE", child: "D-Tibet", event_type: "origin", parent_lat: 30, parent_lon: 90, child_lat: 30, child_lon: 90, color: "#B8860B", description: "D-M174 Tibetan lineage origin" },
  { time_kya: 18.7, parent: "D-Tibet", child: "D3", event_type: "expansion", parent_lat: 30, parent_lon: 90, child_lat: 35, child_lon: 95, color: "#B8860B", description: "D3-P99 Tibetan-specific subclade" },
  { time_kya: 37.7, parent: "D-SEAsia", child: "D1a2a", event_type: "branch", parent_lat: 10, parent_lon: 110, child_lat: 36, child_lon: 138, color: "#FFA500", description: "D1a2a (D-M55) to Japan ~37,678 years ago" },
  { time_kya: 40, parent: "D-SEAsia", child: "D1a2b", event_type: "branch", parent_lat: 10, parent_lon: 110, child_lat: 12, child_lon: 93, color: "#FFD700", description: "D1a2b basal D* to Andaman Islands" },

  // E - African success story with back-migrations
  { time_kya: 70, parent: "DE", child: "E", event_type: "branch", parent_lat: 18, parent_lon: 45, child_lat: 10, child_lon: 42, color: "#8B4513", description: "E in Eastern Africa" },
  { time_kya: 32, parent: "E", child: "E-M96", event_type: "branch", parent_lat: 10, parent_lon: 42, child_lat: 12, child_lon: 40, color: "#8B4513", description: "E-M96 root (21-32 kya)" },
  { time_kya: 20, parent: "E-M96", child: "E-M78", event_type: "branch", parent_lat: 12, parent_lon: 40, child_lat: 15, child_lon: 38, color: "#D2691E", description: "E-M78 emergence" },
  { time_kya: 13, parent: "E-M78", child: "E-M78-NearEast", event_type: "migration", parent_lat: 15, parent_lon: 38, child_lat: 32, child_lon: 35, color: "#DEB887", description: "E-M78 to Near East (13-20 kya)" },
  { time_kya: 13, parent: "E-M78", child: "E-M78-Med", event_type: "migration", parent_lat: 15, parent_lon: 38, child_lat: 35, child_lon: 15, color: "#D2691E", description: "E-M78 Trans-Mediterranean ~13 kya" },
  { time_kya: 47.5, parent: "E-M96", child: "E-V38", event_type: "branch", parent_lat: 12, parent_lon: 40, child_lat: 5, child_lon: 35, color: "#A0522D", description: "E-V38 (E1b1a) emerges" },
  { time_kya: 14, parent: "E-V38", child: "E-M2", event_type: "expansion", parent_lat: 5, parent_lon: 35, child_lat: 20, child_lon: 10, color: "#8B4513", description: "E-M2 Humid Sahara" },
  { time_kya: 5.8, parent: "E-M2", child: "E1b1a-Bantu", event_type: "expansion", parent_lat: 20, parent_lon: 10, child_lat: 5, child_lon: 12, color: "#654321", description: "E1b1a Bantu Expansion lineage (5800 BP)" },
  { time_kya: 5, parent: "E-M2", child: "E-M2-Bantu", event_type: "expansion", parent_lat: 20, parent_lon: 10, child_lat: 6, child_lon: 12, color: "#654321", description: "E-M2 Bantu expansion origin" },
  { time_kya: 3.5, parent: "E-M2-Bantu", child: "E-M2-East", event_type: "migration", parent_lat: 6, parent_lon: 12, child_lat: -2, child_lon: 35, color: "#654321", description: "Bantu to Great Lakes" },
  { time_kya: 2.5, parent: "E-M2-Bantu", child: "E-M2-South", event_type: "migration", parent_lat: 6, parent_lon: 12, child_lat: -10, child_lon: 25, color: "#654321", description: "Bantu to Angola" },
  { time_kya: 2, parent: "E-M2-South", child: "E-M2-SA", event_type: "migration", parent_lat: -10, parent_lon: 25, child_lat: -28, child_lon: 28, color: "#654321", description: "Bantu reaches South Africa" },
  { time_kya: 25, parent: "E-M96", child: "E-M215", event_type: "branch", parent_lat: 12, parent_lon: 40, child_lat: 8, child_lon: 45, color: "#D2691E", description: "E-M215 (E1b1b) Horn of Africa" },
  { time_kya: 8.8, parent: "E-M215", child: "E1b1b1-M35", event_type: "neolithic", parent_lat: 8, parent_lon: 45, child_lat: 33, child_lon: 35, color: "#D2691E", description: "E1b1b1 (E-M35) Neolithic Near East input" },
  { time_kya: 15, parent: "E-M215", child: "E-M78-Levant", event_type: "migration", parent_lat: 8, parent_lon: 45, child_lat: 32, child_lon: 35, color: "#DEB887", description: "E-M78 to Levant" },
  { time_kya: 10, parent: "E-M78-Levant", child: "E-V13", event_type: "branch", parent_lat: 32, parent_lon: 35, child_lat: 42, child_lon: 22, color: "#D2691E", description: "E-V13 Balkans" },
  { time_kya: 8, parent: "E-V13", child: "E-V13-Europe", event_type: "expansion", parent_lat: 42, parent_lon: 22, child_lat: 45, child_lon: 15, color: "#DEB887", description: "E-V13 into Europe" },
  { time_kya: 5.6, parent: "E-M215", child: "E-M81", event_type: "branch", parent_lat: 8, parent_lon: 45, child_lat: 32, child_lon: -5, color: "#CD853F", description: "E-M81 NW Africa (Berber)" },
  { time_kya: 2, parent: "E-M78", child: "E-M81-exp", event_type: "expansion", parent_lat: 33, parent_lon: 0, child_lat: 33, child_lon: 0, color: "#CD853F", description: "E-M81 North African expansion" },

  // ========== CF SPLIT (68.5 kya) ==========
  { time_kya: 68.5, parent: "CT", child: "CF", event_type: "split", parent_lat: 30, parent_lon: 35, child_lat: 30, child_lon: 35, color: "#FF8C00", description: "CF split" },

  // ========== C - SOUTHERN COASTAL PIONEER (60-70 kya) ==========
  { time_kya: 70, parent: "CF", child: "C", event_type: "coastal", parent_lat: 30, parent_lon: 35, child_lat: 28, child_lon: 43, color: "#FF4500", description: "C emerges, Arabian Peninsula crossing" },
  { time_kya: 65, parent: "C", child: "C-Persian", event_type: "coastal", parent_lat: 28, parent_lon: 43, child_lat: 30, child_lon: 55, color: "#FF6347", description: "C along Persian Gulf coast" },
  { time_kya: 60, parent: "C-Persian", child: "C-India", event_type: "coastal", parent_lat: 30, parent_lon: 55, child_lat: 20, child_lon: 77, color: "#FF4500", description: "C reaches Indian subcontinent" },
  { time_kya: 55, parent: "C-India", child: "C-SEAsia", event_type: "coastal", parent_lat: 20, parent_lon: 77, child_lat: -2, child_lon: 115, color: "#FF8C00", description: "C to SE Asia (major diversification)" },
  { time_kya: 40, parent: "C", child: "C-northward", event_type: "expansion", parent_lat: -5, parent_lon: 105, child_lat: 45, child_lon: 115, color: "#FF8C00", description: "C northward expansion along Asian coast" },
  { time_kya: 45, parent: "C-SEAsia", child: "C1", event_type: "branch", parent_lat: -2, parent_lon: 115, child_lat: 10, child_lon: 120, color: "#FF6347", description: "C1 (F3393/Z1426) emerges" },
  { time_kya: 40, parent: "C1", child: "C1-Japan", event_type: "migration", parent_lat: 10, parent_lon: 120, child_lat: 36, child_lon: 138, color: "#FF4500", description: "C1 to Japan (ancient Jomon)" },
  { time_kya: 35, parent: "C1", child: "C1a2", event_type: "migration", parent_lat: 10, parent_lon: 120, child_lat: 50.5, child_lon: 4.4, color: "#FF6347", description: "C1a2 (C-V20) to Europe (Goyet Caves)" },
  { time_kya: 32, parent: "C-SEAsia", child: "C2", event_type: "northern", parent_lat: -2, parent_lon: 115, child_lat: 45, child_lon: 90, color: "#FF8C00", description: "C2 (M217) to Mongolia/Central Asia" },
  { time_kya: 30, parent: "C2", child: "C2-Siberia", event_type: "migration", parent_lat: 45, parent_lon: 90, child_lat: 60, child_lon: 100, color: "#FF8C00", description: "C2 across Siberia" },
  { time_kya: 20, parent: "C2", child: "C2a", event_type: "branch", parent_lat: 45, parent_lon: 90, child_lat: 40, child_lon: 85, color: "#FF8C00", description: "C2a (M93) branch" },
  { time_kya: 20, parent: "C2", child: "C2b", event_type: "branch", parent_lat: 45, parent_lon: 90, child_lat: 48, child_lon: 95, color: "#FF8C00", description: "C2b (L1373) branch" },
  { time_kya: 12, parent: "C-SEAsia", child: "C2-NewGuinea", event_type: "migration", parent_lat: -2, parent_lon: 115, child_lat: -2, child_lon: 134, color: "#FF8C00", description: "C2 Northwest New Guinea (12000 BP)" },
  { time_kya: 2.5, parent: "C2", child: "C3-StarCluster", event_type: "expansion", parent_lat: 45, parent_lon: 90, child_lat: 48, child_lon: 105, color: "#FF8C00", description: "C3* Star Cluster (Mongol expansion)" },
  { time_kya: 1.3, parent: "C2", child: "C*-xC3c", event_type: "expansion", parent_lat: 45, parent_lon: 90, child_lat: 47.9, child_lon: 106.9, color: "#FF8C00", description: "C*(xC3c) early Genghis Khan lineage" },
  { time_kya: 0.59, parent: "C*-xC3c", child: "C-GenghisKhan", event_type: "expansion", parent_lat: 47.9, parent_lon: 106.9, child_lat: 47.9, child_lon: 106.9, color: "#FF8C00", description: "Genghis Khan lineage expansion (590-1300 BP)" },
  { time_kya: 15, parent: "C2-Siberia", child: "C3*", event_type: "migration", parent_lat: 60, parent_lon: 100, child_lat: 65, child_lon: -165, color: "#FF8C00", description: "C3* to Beringia" },
  { time_kya: 14, parent: "C3*", child: "C3-America", event_type: "migration", parent_lat: 65, parent_lon: -165, child_lat: 60, child_lon: -150, color: "#FF8C00", description: "C3* enters Americas" },
  { time_kya: 60, parent: "C-SEAsia", child: "C4-proto", event_type: "coastal", parent_lat: -2, parent_lon: 115, child_lat: -5, child_lon: 130, color: "#FF4500", description: "C proto-Australian migration" },
  { time_kya: 50, parent: "C4-proto", child: "C4", event_type: "branch", parent_lat: -5, parent_lon: 130, child_lat: -25, child_lon: 135, color: "#FF4500", description: "C4 (M347) reaches Australia (Sahul)" },

  // ========== F - EURASIAN RADIATION (43.8-56.8 kya) ==========
  { time_kya: 56.8, parent: "CF", child: "F", event_type: "split", parent_lat: 30, parent_lon: 35, child_lat: 35, child_lon: 50, color: "#9370DB", description: "F (M89) emerges Persian Gulf region" },
  { time_kya: 50, parent: "F", child: "F-SEAsia", event_type: "migration", parent_lat: 35, parent_lon: 50, child_lat: 10, child_lon: 100, color: "#9370DB", description: "F to SE Asia (major center)" },
  { time_kya: 45.9, parent: "F", child: "F-Europe", event_type: "migration", parent_lat: 35, parent_lon: 50, child_lat: 43.2, child_lon: 25.4, color: "#9370DB", description: "F to Europe (Bacho-Kiro cave)" },
  { time_kya: 45, parent: "F", child: "F*-SriLanka", event_type: "branch", parent_lat: 35, parent_lon: 50, child_lat: 7, child_lon: 80, color: "#9370DB", description: "F* to Sri Lanka/S India (10% peak)" },
  { time_kya: 45, parent: "F", child: "F*-Pakistan", event_type: "branch", parent_lat: 35, parent_lon: 50, child_lat: 30, child_lon: 70, color: "#9370DB", description: "F* to Pakistan (5% frequency)" },

  // G - Neolithic farmers
  { time_kya: 48, parent: "F", child: "GHIJK", event_type: "split", parent_lat: 35, parent_lon: 50, child_lat: 35, child_lon: 55, color: "#9370DB", description: "GHIJK (F1329) emerges" },
  { time_kya: 17, parent: "GHIJK", child: "G", event_type: "branch", parent_lat: 35, parent_lon: 55, child_lat: 40, child_lon: 44, color: "#9370DB", description: "G-M201 Eastern Anatolia/Armenia/W Iran origin (Semino 2000)" },
  { time_kya: 10, parent: "G", child: "G-Boncuklu", event_type: "ancient", parent_lat: 40, parent_lon: 44, child_lat: 37.5, child_lon: 32.5, color: "#9370DB", description: "G-M201 Boncuklu, Anatolia (8300-7600 BCE) - earliest G aDNA" },
  { time_kya: 9.5, parent: "G", child: "G2a", event_type: "branch", parent_lat: 40, parent_lon: 44, child_lat: 39, child_lon: 35, color: "#8A2BE2", description: "G2a branch emerges" },
  { time_kya: 8.3, parent: "G2a", child: "G2a-Barcin", event_type: "ancient", parent_lat: 39, parent_lon: 35, child_lat: 40, child_lon: 29, color: "#8A2BE2", description: "G2a subclades Barcın, NW Anatolia (6500-6200 BCE) - 8/13 males" },
  { time_kya: 8.3, parent: "G2a-Barcin", child: "G2a2a-PF3146", event_type: "branch", parent_lat: 40, parent_lon: 29, child_lat: 40, child_lon: 29, color: "#8A2BE2", description: "G2a2a-PF3146 at Barcın (Mathieson 2015)" },
  { time_kya: 8.3, parent: "G2a-Barcin", child: "G2a2a1b-L91-Barcin", event_type: "branch", parent_lat: 40, parent_lon: 29, child_lat: 40, child_lon: 29, color: "#8A2BE2", description: "G2a2a1b-L91 at Barcın (Mathieson 2015)" },
  { time_kya: 8.3, parent: "G2a-Barcin", child: "G2a2b-L30-Barcin", event_type: "branch", parent_lat: 40, parent_lon: 29, child_lat: 40, child_lon: 29, color: "#8A2BE2", description: "G2a2b-L30 at Barcın (Mathieson 2015)" },
  { time_kya: 8.3, parent: "G2a-Barcin", child: "G2a2b2a-P303-Barcin", event_type: "branch", parent_lat: 40, parent_lon: 29, child_lat: 40, child_lon: 29, color: "#8A2BE2", description: "G2a2b2a-P303 at Barcın (Mathieson 2015)" },
  { time_kya: 8, parent: "G2a-Barcin", child: "G2a-Thessaly", event_type: "neolithic", parent_lat: 40, parent_lon: 29, child_lat: 39.5, child_lon: 22, color: "#8A2BE2", description: "G2a to Thessaly, Greece (Hofmanová 2015)" },
  { time_kya: 7.8, parent: "G2a-Thessaly", child: "G2a-Balkans", event_type: "neolithic", parent_lat: 39.5, parent_lon: 22, child_lat: 44, child_lon: 20, color: "#8A2BE2", description: "G2a expansion to Serbia/Hungary/Romania by 5800 BCE" },
  { time_kya: 7.5, parent: "G2a-Balkans", child: "G2a-Starcevo", event_type: "neolithic", parent_lat: 44, parent_lon: 20, child_lat: 44.8, child_lon: 20.3, color: "#8A2BE2", description: "G2a Starčevo culture, Serbia (6000-4500 BCE) - 50% of males" },
  { time_kya: 7.5, parent: "G2a-Balkans", child: "G2a-Koros", event_type: "neolithic", parent_lat: 44, parent_lon: 20, child_lat: 46.8, child_lon: 20.5, color: "#8A2BE2", description: "G2a Körös culture, Hungary (6000-4500 BCE)" },
  { time_kya: 7.5, parent: "G2a-Balkans", child: "G2a-Cris", event_type: "neolithic", parent_lat: 44, parent_lon: 20, child_lat: 46, child_lon: 22, color: "#8A2BE2", description: "G2a Criș culture, Romania (6000-4500 BCE)" },
  { time_kya: 7.5, parent: "G2a-Thessaly", child: "G2a-Cardium", event_type: "neolithic", parent_lat: 39.5, parent_lon: 22, child_lat: 43.5, child_lon: 16.5, color: "#8A2BE2", description: "G2a Cardium/Danilo cultures, Adriatic Croatia - 50% of males" },
  { time_kya: 7.5, parent: "G2a-Balkans", child: "G2a-LBK", event_type: "neolithic", parent_lat: 44, parent_lon: 20, child_lat: 50, child_lon: 10, color: "#8A2BE2", description: "G2a Linear Pottery (LBK) culture, Germany by 5500 BCE" },
  { time_kya: 7.2, parent: "G2a-LBK", child: "G2a-Belgium", event_type: "neolithic", parent_lat: 50, parent_lon: 10, child_lat: 50.5, child_lon: 4.5, color: "#8A2BE2", description: "G2a to Belgium by 5200 BCE" },
  { time_kya: 7.2, parent: "G2a-LBK", child: "G2a-NFrance", event_type: "neolithic", parent_lat: 50, parent_lon: 10, child_lat: 49, child_lon: 2.5, color: "#8A2BE2", description: "G2a to Northern France by 5200 BCE" },
  { time_kya: 7, parent: "G2a-Cardium", child: "G2a-Avellaner", event_type: "ancient", parent_lat: 43.5, parent_lon: 16.5, child_lat: 42.1, child_lon: 2.5, color: "#8A2BE2", description: "G2a Avellaner cave, Catalonia ~5000 BCE - oldest G2a in Spain" },
  { time_kya: 7, parent: "G2a-Cardium", child: "G2a-Italy", event_type: "neolithic", parent_lat: 43.5, parent_lon: 16.5, child_lat: 42, child_lon: 12, color: "#8A2BE2", description: "G2a to Italy via Mediterranean route" },
  { time_kya: 6.5, parent: "G2a-Italy", child: "G2a-Sardinia", event_type: "neolithic", parent_lat: 42, parent_lon: 12, child_lat: 40, child_lon: 9, color: "#8A2BE2", description: "G2a to Sardinia (Middle Neolithic 4100-3500 BCE)" },
  { time_kya: 6, parent: "G2a-Balkans", child: "G2a-MNBulgaria", event_type: "neolithic", parent_lat: 44, parent_lon: 20, child_lat: 42.5, child_lon: 25.5, color: "#8A2BE2", description: "G2a-L91, G2a-P303 Middle Neolithic Bulgaria (Mathieson 2017)" },
  { time_kya: 5.5, parent: "G2a-MNBulgaria", child: "G2a-Trypillia", event_type: "neolithic", parent_lat: 42.5, parent_lon: 25.5, child_lat: 48.5, child_lon: 31, color: "#8A2BE2", description: "G2a-P303, G2a-L42 Trypillian culture, Ukraine (Mathieson 2017)" },
  { time_kya: 5.5, parent: "G2a-MNBulgaria", child: "G2a-Varna", event_type: "neolithic", parent_lat: 42.5, parent_lon: 25.5, child_lat: 43.2, child_lon: 27.9, color: "#8A2BE2", description: "G2a-PF3359 Varna culture, Bulgaria (Mathieson 2017)" },
  { time_kya: 5.6, parent: "G2a-LBK", child: "G2a-Derenburg", event_type: "ancient", parent_lat: 50, parent_lon: 10, child_lat: 51.9, child_lon: 10.9, color: "#8A2BE2", description: "G2a3 (G-S126/L30) Derenburg, Saxony-Anhalt (5100-6100 ya)" },
  { time_kya: 5, parent: "G2a-NFrance", child: "G2a-Treilles", event_type: "ancient", parent_lat: 49, parent_lon: 2.5, child_lat: 43, child_lon: 2.7, color: "#8A2BE2", description: "G2a Treilles, S France - 20/22 males (Lacan 2011)" },
  { time_kya: 5, parent: "G2a-Sardinia", child: "G2a2a-L91-Otzi", event_type: "ancient", parent_lat: 40, parent_lon: 9, child_lat: 46.8, child_lon: 10.8, color: "#8A2BE2", description: "G2a2a2-L91 Ötzi the Iceman, Ötztal Alps (5000 ya)" },
  { time_kya: 4.5, parent: "G2a-MNBulgaria", child: "G2a-ChalcoBulgaria", event_type: "neolithic", parent_lat: 42.5, parent_lon: 25.5, child_lat: 42.7, child_lon: 25, color: "#8A2BE2", description: "G2a-Z1903 Chalcolithic Bulgaria (Mathieson 2017)" },
  { time_kya: 6, parent: "G2a-LBK", child: "G2a-Britain", event_type: "neolithic", parent_lat: 50, parent_lon: 10, child_lat: 52, child_lon: -1, color: "#8A2BE2", description: "G2a to Britain" },
  // G2a subclades and regional distributions
  { time_kya: 8, parent: "G2a", child: "G2a2a-L91", event_type: "branch", parent_lat: 39, parent_lon: 35, child_lat: 39, child_lon: 35, color: "#8A2BE2", description: "G2a2a-L91 subclade (Ötzi's lineage)" },
  { time_kya: 5, parent: "G2a2a-L91", child: "G2a2a-L91-Sicily", event_type: "migration", parent_lat: 39, parent_lon: 35, child_lat: 37.5, child_lon: 14, color: "#8A2BE2", description: "G2a2a-L91 to Sicily (modern: relatively common)" },
  { time_kya: 5, parent: "G2a2a-L91", child: "G2a2a-L91-Corsica", event_type: "migration", parent_lat: 40, parent_lon: 9, child_lat: 42, child_lon: 9, color: "#8A2BE2", description: "G2a2a-L91 to Corsica (modern: 21.7% G total)" },
  { time_kya: 5, parent: "G2a2a-L91", child: "G2a2a-L91-NAfrica", event_type: "migration", parent_lat: 37.5, parent_lon: 14, child_lat: 35, child_lon: 10, color: "#8A2BE2", description: "G2a2a-L91 to North Africa" },
  { time_kya: 8, parent: "G2a", child: "G2a2b1-M406", event_type: "branch", parent_lat: 39, parent_lon: 35, child_lat: 38, child_lon: 35, color: "#8A2BE2", description: "G2a2b1-M406 subclade Turkey/E Mediterranean" },
  { time_kya: 6, parent: "G2a2b1-M406", child: "G2a2b1-M406-coastal", event_type: "expansion", parent_lat: 38, parent_lon: 35, child_lat: 36, child_lon: 30, color: "#8A2BE2", description: "G2a2b1-M406 E Mediterranean coast (up to 5% males)" },
  { time_kya: 8, parent: "G2a", child: "G2a2b2a-P303", event_type: "branch", parent_lat: 39, parent_lon: 35, child_lat: 40, child_lon: 40, color: "#8A2BE2", description: "G2a2b2a-P303 subclade Turkey/Iran/Middle East origin" },
  { time_kya: 6, parent: "G2a2b2a-P303", child: "G2a2b2a-P303-Caucasus", event_type: "expansion", parent_lat: 40, parent_lon: 40, child_lat: 42, child_lon: 44, color: "#8A2BE2", description: "G2a2b2a-P303 to Caucasus and Southern Russia" },
  { time_kya: 6, parent: "G2a2b2a-P303", child: "G2a2b2a1a1b-L497", event_type: "branch", parent_lat: 40, parent_lon: 40, child_lat: 48, child_lon: 10, color: "#8A2BE2", description: "G2a2b2a1a1b-L497 European subclade (DYS388=13)" },
  { time_kya: 5, parent: "G2a2b2a-P303", child: "G2a2b2a1a1a-L13", event_type: "branch", parent_lat: 40, parent_lon: 40, child_lat: 41.9, child_lon: 12.5, color: "#8A2BE2", description: "G2a2b2a1a1a-L13 peaks Central Italy/Latium" },
  // G2a refugia and modern persistence
  { time_kya: 3.5, parent: "G2a-Sardinia", child: "G2a-Sardinia-persist", event_type: "persistence", parent_lat: 40, parent_lon: 9, child_lat: 40.5, child_lon: 9.3, color: "#8A2BE2", description: "G2a Sardinian refugium - genetic continuity to Nuragic (~900 BCE)" },
  { time_kya: 3, parent: "G2a-Sardinia-persist", child: "G2a-Sardinia-modern", event_type: "persistence", parent_lat: 40.5, parent_lon: 9.3, child_lat: 41, child_lon: 9.2, color: "#8A2BE2", description: "G2a Sardinia modern: 11-21% (Tempio: 21%)" },
  { time_kya: 3, parent: "G2a2a-L91-Corsica", child: "G2a-Corsica-modern", event_type: "persistence", parent_lat: 42, parent_lon: 9, child_lat: 42.2, child_lon: 9.1, color: "#8A2BE2", description: "G2a Corsica modern: 21.7% (highest Europe outside Caucasus)" },
  { time_kya: 3, parent: "G2a2a-L91-Otzi", child: "G2a-Tyrol-modern", event_type: "persistence", parent_lat: 46.8, parent_lon: 10.8, child_lat: 47, child_lon: 11.5, color: "#8A2BE2", description: "G2a Tyrol/Alps modern: 11.3-40% in valleys" },

  // H - South Asian marker
  { time_kya: 48, parent: "GHIJK", child: "HIJK", event_type: "split", parent_lat: 35, parent_lon: 55, child_lat: 35, child_lon: 60, color: "#FF1493", description: "HIJK emerges" },
  { time_kya: 48, parent: "HIJK", child: "H", event_type: "branch", parent_lat: 35, parent_lon: 60, child_lat: 25, child_lon: 77, color: "#FF1493", description: "H to South Asia" },
  { time_kya: 30, parent: "H", child: "H1", event_type: "branch", parent_lat: 25, parent_lon: 77, child_lat: 22, child_lon: 77, color: "#FF1493", description: "H1 Indian subcontinent" },
  { time_kya: 10.3, parent: "H", child: "H2", event_type: "origin", parent_lat: 33, parent_lon: 35, child_lat: 33, child_lon: 35, color: "#FF1493", description: "H2-P96 Pre-Pottery Neolithic B Levant" },
  { time_kya: 8, parent: "H2", child: "H2-anatolia", event_type: "migration", parent_lat: 33, parent_lon: 35, child_lat: 38, child_lon: 35, color: "#FF1493", description: "H2 to Anatolia (ancient DNA)" },
  { time_kya: 7, parent: "H2-anatolia", child: "H2m", event_type: "expansion", parent_lat: 38, parent_lon: 35, child_lat: 43, child_lon: 5, color: "#FF1493", description: "H2m Mediterranean route to Europe" },
  { time_kya: 7, parent: "H2-anatolia", child: "H2d", event_type: "expansion", parent_lat: 38, parent_lon: 35, child_lat: 48, child_lon: 20, color: "#FF1493", description: "H2d Danubian route to Europe" },
  { time_kya: 5, parent: "H1", child: "H1-SriLanka", event_type: "expansion", parent_lat: 22, parent_lon: 77, child_lat: 7, child_lon: 80, color: "#FF1493", description: "H1 to Sri Lanka" },
  { time_kya: 5, parent: "H1", child: "H1a1", event_type: "branch", parent_lat: 22, parent_lon: 77, child_lat: 22, child_lon: 77, color: "#FF1493", description: "H1a1-M82 formation" },
  { time_kya: 1, parent: "H1a1", child: "H1a1-roma", event_type: "migration", parent_lat: 22, parent_lon: 77, child_lat: 45, child_lon: 20, color: "#FF1493", description: "H1a1-M82 Roma migration to Europe (Medieval)" },
  { time_kya: 1, parent: "H1", child: "H1-Roma", event_type: "migration", parent_lat: 22, parent_lon: 77, child_lat: 48, child_lon: 20, color: "#FF1493", description: "H Roma to Europe" },

  // ========== IJK SPLIT (50 kya) ==========
  { time_kya: 50, parent: "HIJK", child: "IJK", event_type: "split", parent_lat: 35, parent_lon: 60, child_lat: 35, child_lon: 65, color: "#4682B4", description: "IJK macrohaplogroup" },
  { time_kya: 49, parent: "IJK", child: "IJ", event_type: "split", parent_lat: 35, parent_lon: 65, child_lat: 35, child_lon: 45, color: "#4169E1", description: "IJ divergence" },

  // I - European hunter-gatherers
  { time_kya: 24, parent: "IJ", child: "I", event_type: "branch", parent_lat: 35, parent_lon: 45, child_lat: 48, child_lon: 15, color: "#0000FF", description: "I Pre-LGM Europe" },
  { time_kya: 15, parent: "I", child: "I-Refuge", event_type: "glacial", parent_lat: 48, parent_lon: 15, child_lat: 42, child_lon: -3, color: "#0000FF", description: "I LGM refuge (Iberia/Balkans)" },
  { time_kya: 12, parent: "I-Refuge", child: "I1", event_type: "recolonization", parent_lat: 42, parent_lon: -3, child_lat: 60, child_lon: 10, color: "#1E90FF", description: "I1 to Scandinavia" },
  { time_kya: 12, parent: "I-Refuge", child: "I2", event_type: "recolonization", parent_lat: 42, parent_lon: -3, child_lat: 44, child_lon: 20, color: "#4169E1", description: "I2 Balkans expansion" },
  { time_kya: 10, parent: "I2", child: "I2a", event_type: "branch", parent_lat: 44, parent_lon: 20, child_lat: 44, child_lon: 16, color: "#4682B4", description: "I2a Dinaric" },
  { time_kya: 4, parent: "I2a", child: "I2a1b", event_type: "persistence", parent_lat: 59, parent_lon: -5, child_lat: 59, child_lon: -5, color: "#708090", description: "I2a1b-M423 persistence Bronze Age Orkney" },

  // J - Middle Eastern agricultural
  { time_kya: 31.7, parent: "IJ", child: "J", event_type: "branch", parent_lat: 35, parent_lon: 45, child_lat: 33, child_lon: 44, color: "#20B2AA", description: "J Middle East" },
  { time_kya: 24, parent: "J", child: "J2", event_type: "branch", parent_lat: 33, parent_lon: 44, child_lat: 40, child_lon: 43, color: "#48D1CC", description: "J2 Caucasus/Anatolia" },
  { time_kya: 20, parent: "J", child: "J1", event_type: "branch", parent_lat: 33, parent_lon: 44, child_lat: 38, child_lon: 45, color: "#00CED1", description: "J1 NW Iran/Caucasus" },
  { time_kya: 15, parent: "J1", child: "J1-Arabia", event_type: "expansion", parent_lat: 38, parent_lon: 45, child_lat: 25, child_lon: 45, color: "#00CED1", description: "J1 Arabian Peninsula" },
  { time_kya: 10, parent: "J1-Arabia", child: "J1-Yemen", event_type: "expansion", parent_lat: 25, parent_lon: 45, child_lat: 15, child_lon: 44, color: "#00CED1", description: "J1 to Yemen" },
  { time_kya: 7, parent: "J1-Arabia", child: "J1-NAfrica", event_type: "expansion", parent_lat: 25, parent_lon: 45, child_lat: 30, child_lon: 10, color: "#00CED1", description: "J1 North Africa" },
  { time_kya: 5, parent: "J1-Yemen", child: "J1-Ethiopia", event_type: "expansion", parent_lat: 15, parent_lon: 44, child_lat: 9, child_lon: 39, color: "#00CED1", description: "J1 Horn of Africa" },
  { time_kya: 4.28, parent: "J1", child: "J1-P58", event_type: "branch", parent_lat: 38, parent_lon: 45, child_lat: 33, child_lon: 35, color: "#00CED1", description: "J1-P58 Cohanim priestly lineage emerges" },
  { time_kya: 2.1, parent: "J1-P58", child: "J1-Cohanim", event_type: "expansion", parent_lat: 33, parent_lon: 35, child_lat: 33, child_lon: 35, color: "#00CED1", description: "J1 Cohanim priestly lineage" },
  { time_kya: 1.4, parent: "J1-Arabia", child: "J1-Islamic", event_type: "expansion", parent_lat: 25, parent_lon: 45, child_lat: 33, child_lon: 44, color: "#00CED1", description: "J1 Islamic expansion" },
  { time_kya: 3, parent: "J1", child: "J1-M267", event_type: "expansion", parent_lat: 25, parent_lon: 45, child_lat: 20, child_lon: 40, color: "#00CED1", description: "J1-M267 Arabian Peninsula expansion" },
  { time_kya: 8.8, parent: "J2", child: "J2-M172", event_type: "neolithic", parent_lat: 40, parent_lon: 43, child_lat: 33, child_lon: 35, color: "#48D1CC", description: "J2 (J-M172) Neolithic Near East input" },
  { time_kya: 9, parent: "J2", child: "J2-Anatolia", event_type: "neolithic", parent_lat: 40, parent_lon: 43, child_lat: 39, child_lon: 30, color: "#48D1CC", description: "J2 Anatolia" },
  { time_kya: 9, parent: "J2", child: "J2a", event_type: "expansion", parent_lat: 36, parent_lon: 44, child_lat: 38, child_lon: 42, color: "#48D1CC", description: "J2a-M410 Near East Neolithic" },
  { time_kya: 8, parent: "J2a", child: "J2a-anatolia", event_type: "migration", parent_lat: 38, parent_lon: 42, child_lat: 41, child_lon: 35, color: "#48D1CC", description: "J2a into Anatolia" },
  { time_kya: 7, parent: "J2a-anatolia", child: "J2a-europe", event_type: "expansion", parent_lat: 41, parent_lon: 35, child_lat: 45, child_lon: 20, color: "#48D1CC", description: "J2a spread to Europe with farmers" },
  { time_kya: 8, parent: "J2-Anatolia", child: "J2-Greece", event_type: "maritime", parent_lat: 39, parent_lon: 30, child_lat: 38, child_lon: 23, color: "#48D1CC", description: "J2 to Greece" },
  { time_kya: 7.5, parent: "J2-Greece", child: "J2-Italy", event_type: "maritime", parent_lat: 38, parent_lon: 23, child_lat: 41, child_lon: 14, color: "#48D1CC", description: "J2 to Italy" },
  { time_kya: 7, parent: "J2-Greece", child: "J2-Balkans", event_type: "expansion", parent_lat: 38, parent_lon: 23, child_lat: 44, child_lon: 20, color: "#48D1CC", description: "J2 Balkans" },
  { time_kya: 5, parent: "J2", child: "J2-India", event_type: "migration", parent_lat: 40, parent_lon: 43, child_lat: 28, child_lon: 77, color: "#48D1CC", description: "J2 Indo-Aryan to India" },

  // ========== K - EURASIAN DIVERSIFICATION (47-50 kya) ==========
  { time_kya: 50, parent: "IJK", child: "K", event_type: "split", parent_lat: 35, parent_lon: 65, child_lat: 35, child_lon: 50, color: "#FFB6C1", description: "K (M9) emerges Iran/Pakistan" },
  { time_kya: 47, parent: "K", child: "K-SEAsia", event_type: "migration", parent_lat: 35, parent_lon: 50, child_lat: 10, child_lon: 100, color: "#FFB6C1", description: "K to SE Asia (rapid diversification)" },
  { time_kya: 45, parent: "K-SEAsia", child: "K2*", event_type: "coastal", parent_lat: 10, parent_lon: 100, child_lat: -25, child_lon: 135, color: "#FFB6C1", description: "K2* basal to Australia" },
  { time_kya: 45, parent: "K", child: "K-M2308", event_type: "northern", parent_lat: 35, parent_lon: 50, child_lat: 57.8, child_lon: 70.8, color: "#FFB6C1", description: "K-M2308 to Siberia (Ust-Ishim)" },
  { time_kya: 48, parent: "K", child: "LT", event_type: "split", parent_lat: 35, parent_lon: 50, child_lat: 30, child_lon: 68, color: "#FFC0CB", description: "LT (K1/L298/P326) split" },
  { time_kya: 30, parent: "LT", child: "L", event_type: "branch", parent_lat: 30, parent_lon: 68, child_lat: 32, child_lon: 53, color: "#FFB6C1", description: "L Iranian Plateau" },
  { time_kya: 20.6, parent: "L", child: "L1-M22", event_type: "branch", parent_lat: 32, parent_lon: 53, child_lat: 25, child_lon: 70, color: "#FFB6C1", description: "L1-M22 West Asia" },
  { time_kya: 25, parent: "LT", child: "T", event_type: "branch", parent_lat: 30, parent_lon: 68, child_lat: 35, child_lon: 38, color: "#FF69B4", description: "T Near East" },
  { time_kya: 20, parent: "T", child: "T-RedSea", event_type: "expansion", parent_lat: 35, parent_lon: 38, child_lat: 25, child_lon: 40, color: "#FF69B4", description: "T Red Sea coasts" },
  { time_kya: 15, parent: "T-RedSea", child: "T-Horn", event_type: "expansion", parent_lat: 25, parent_lon: 40, child_lat: 10, child_lon: 45, color: "#FF69B4", description: "T Horn of Africa" },
  { time_kya: 47, parent: "K", child: "K2", event_type: "split", parent_lat: 35, parent_lon: 50, child_lat: 5, child_lon: 120, color: "#9370DB", description: "K2 (M526) to SE Asia" },
  { time_kya: 47, parent: "K2", child: "MS", event_type: "split", parent_lat: 5, parent_lon: 120, child_lat: -5, child_lon: 130, color: "#9370DB", description: "MS to Melanesia" },
  { time_kya: 45, parent: "MS", child: "M", event_type: "branch", parent_lat: -5, parent_lon: 130, child_lat: -6, child_lon: 145, color: "#9370DB", description: "M Papua New Guinea" },
  { time_kya: 45, parent: "MS", child: "S", event_type: "branch", parent_lat: -5, parent_lon: 130, child_lat: -6, child_lon: 147, color: "#8A2BE2", description: "S PNG highlands" },

  // ========== NO SPLIT (45 kya) - K2a descendant ==========
  { time_kya: 45, parent: "K2", child: "K2a", event_type: "split", parent_lat: 5, parent_lon: 120, child_lat: 35, child_lon: 100, color: "#008000", description: "K2a (M-2308) emerges" },
  { time_kya: 45, parent: "K2a", child: "K-M2313", event_type: "branch", parent_lat: 35, parent_lon: 100, child_lat: 35, child_lon: 100, color: "#008000", description: "K-M2313" },
  { time_kya: 45, parent: "K-M2313", child: "NO1", event_type: "branch", parent_lat: 35, parent_lon: 100, child_lat: 35, child_lon: 100, color: "#008000", description: "NO1 (M-214)" },
  { time_kya: 45, parent: "NO1", child: "NO", event_type: "split", parent_lat: 35, parent_lon: 100, child_lat: 35, child_lon: 100, color: "#008000", description: "NO split" },

  // N - Northern Eurasian
  { time_kya: 21.7, parent: "NO", child: "N", event_type: "origin", parent_lat: 23, parent_lon: 105, child_lat: 23, child_lon: 105, color: "#32CD32", description: "N-M231 origin southern China" },
  { time_kya: 20, parent: "N", child: "N-base", event_type: "branch", parent_lat: 23, parent_lon: 105, child_lat: 50, child_lon: 100, color: "#32CD32", description: "N SE Asia/S Siberia" },
  { time_kya: 18, parent: "N", child: "N-north", event_type: "expansion", parent_lat: 23, parent_lon: 105, child_lat: 40, child_lon: 110, color: "#32CD32", description: "N northward into northern China" },
  { time_kya: 14, parent: "N-north", child: "N-siberia", event_type: "expansion", parent_lat: 40, parent_lon: 110, child_lat: 60, child_lon: 100, color: "#32CD32", description: "N reaches Siberia" },
  { time_kya: 14, parent: "N-siberia", child: "N1c", event_type: "branch", parent_lat: 60, parent_lon: 100, child_lat: 60, child_lon: 60, color: "#228B22", description: "N1c emerges" },
  { time_kya: 10, parent: "N1c", child: "N1c-Ural", event_type: "migration", parent_lat: 60, parent_lon: 60, child_lat: 60, child_lon: 50, color: "#228B22", description: "N1c Ural Mountains" },
  { time_kya: 10, parent: "N-siberia", child: "N1c-europe", event_type: "expansion", parent_lat: 60, parent_lon: 100, child_lat: 60, child_lon: 40, color: "#32CD32", description: "N1c westward to Europe" },
  { time_kya: 8, parent: "N1c-Ural", child: "N1c-Baltic", event_type: "migration", parent_lat: 60, parent_lon: 50, child_lat: 58, child_lon: 25, color: "#228B22", description: "N1c Baltic region" },
  { time_kya: 5, parent: "N1c-Baltic", child: "N1c-Finland", event_type: "migration", parent_lat: 58, parent_lon: 25, child_lat: 65, child_lon: 25, color: "#228B22", description: "N1c to Finland" },
  { time_kya: 3.75, parent: "N1c", child: "N1a", event_type: "expansion", parent_lat: 40, parent_lon: 90, child_lat: 35, child_lon: 100, color: "#FFA500", description: "N1a-M128 recent expansion" },

  // ========== O - EAST ASIAN DOMINANT (25-35 kya) ==========
  { time_kya: 35, parent: "NO", child: "O", event_type: "branch", parent_lat: 35, parent_lon: 100, child_lat: 23, child_lon: 113, color: "#DC143C", description: "O (M175) S China/SE Asia origin" },
  { time_kya: 30, parent: "O", child: "O-North", event_type: "expansion", parent_lat: 23, parent_lon: 113, child_lat: 35, child_lon: 115, color: "#DC143C", description: "O northward expansion (25-30 kya)" },
  { time_kya: 25, parent: "O", child: "O1", event_type: "branch", parent_lat: 23, parent_lon: 113, child_lat: 23, child_lon: 113, color: "#DC143C", description: "O1 (F265) branch" },
  { time_kya: 25, parent: "O", child: "O2", event_type: "branch", parent_lat: 23, parent_lon: 113, child_lat: 35, child_lon: 115, color: "#DC143C", description: "O2 (M122) East Asia" },
  { time_kya: 20, parent: "O2", child: "O2-M122", event_type: "expansion", parent_lat: 35, parent_lon: 115, child_lat: 35, child_lon: 116, color: "#8B0000", description: "O2-M122 expansion" },
  { time_kya: 9, parent: "O", child: "O-Yangtze", event_type: "agricultural", parent_lat: 23, parent_lon: 113, child_lat: 30, child_lon: 120, color: "#DC143C", description: "O Yangtze rice domestication (9-8 kya)" },
  { time_kya: 8, parent: "O-Yangtze", child: "O-RiceExpansion", event_type: "agricultural", parent_lat: 30, parent_lon: 120, child_lat: 25, child_lon: 115, color: "#DC143C", description: "O rice agriculture expansion" },
  { time_kya: 15, parent: "O2", child: "O2a1", event_type: "branch", parent_lat: 35, parent_lon: 115, child_lat: 20, child_lon: 105, color: "#8B0000", description: "O2a1-M95 (Austro-Asiatic)" },
  { time_kya: 10, parent: "O2", child: "O2a2b1a1", event_type: "branch", parent_lat: 35, parent_lon: 115, child_lat: 30, child_lon: 100, color: "#8B0000", description: "O2a2b1a1-M117 (Tibeto-Burman)" },
  { time_kya: 5, parent: "O2-M122", child: "O2a1c1-F11", event_type: "expansion", parent_lat: 35, parent_lon: 116, child_lat: 32, child_lon: 118, color: "#8B0000", description: "O2a1c1-F11 Han expansion" },
  { time_kya: 2.3, parent: "O2", child: "O-Yayoi", event_type: "migration", parent_lat: 35, parent_lon: 115, child_lat: 37, child_lon: 119, color: "#DC143C", description: "O to Shandong/Liaoning" },
  { time_kya: 2.3, parent: "O-Yayoi", child: "O-Korea", event_type: "migration", parent_lat: 37, parent_lon: 119, child_lat: 37, child_lon: 127, color: "#DC143C", description: "O through Korean Peninsula" },
  { time_kya: 2.3, parent: "O-Korea", child: "O-Japan", event_type: "migration", parent_lat: 37, parent_lon: 127, child_lat: 36, child_lon: 138, color: "#DC143C", description: "O Yayoi to Japan (2,300 years ago)" },

  // O1a - Austronesian expansion (5-3 kya)
  { time_kya: 5.5, parent: "O1", child: "O1a", event_type: "branch", parent_lat: 23, parent_lon: 113, child_lat: 24, child_lon: 121, color: "#FF0000", description: "O1a Taiwan origin" },
  { time_kya: 4.5, parent: "O1a", child: "O1a-Philippines", event_type: "maritime", parent_lat: 24, parent_lon: 121, child_lat: 12, child_lon: 122, color: "#FF0000", description: "O1a to Philippines" },
  { time_kya: 4, parent: "O1a-Philippines", child: "O1a-Indonesia", event_type: "maritime", parent_lat: 12, parent_lon: 122, child_lat: -5, child_lon: 120, color: "#FF0000", description: "O1a to Indonesia" },
  { time_kya: 3.5, parent: "O1a-Indonesia", child: "O1a-Melanesia", event_type: "maritime", parent_lat: -5, parent_lon: 120, child_lat: -5, child_lon: 150, color: "#FF0000", description: "O1a to Melanesia" },
  { time_kya: 3, parent: "O1a-Melanesia", child: "O1a-Micronesia", event_type: "maritime", parent_lat: -5, parent_lon: 150, child_lat: 7, child_lon: 158, color: "#FF0000", description: "O1a to Micronesia" },
  { time_kya: 2, parent: "O1a-Melanesia", child: "O1a-Polynesia", event_type: "maritime", parent_lat: -5, parent_lon: 150, child_lat: -15, child_lon: -150, color: "#FF0000", description: "O1a to Polynesia" },
  { time_kya: 1, parent: "O1a-Indonesia", child: "O1a-Madagascar", event_type: "maritime", parent_lat: -5, parent_lon: 120, child_lat: -20, child_lon: 47, color: "#FF0000", description: "O1a to Madagascar" },
  { time_kya: 0.8, parent: "O1a-Polynesia", child: "O1a-NZ", event_type: "maritime", parent_lat: -15, parent_lon: -150, child_lat: -41, child_lon: 174, color: "#FF0000", description: "O1a to New Zealand" },

  // ========== P - ANCESTOR OF Q AND R (45 kya) ==========
  { time_kya: 45, parent: "K2", child: "P", event_type: "split", parent_lat: 5, parent_lon: 120, child_lat: 40, child_lon: 70, color: "#000080", description: "P emerges from K2" },
  { time_kya: 35, parent: "P", child: "P-M45", event_type: "branch", parent_lat: 40, parent_lon: 70, child_lat: 55, child_lon: 85, color: "#000080", description: "P-M45 Siberia/C Asia" },

  // Q - American founder lineage
  { time_kya: 30, parent: "P-M45", child: "Q", event_type: "branch", parent_lat: 55, parent_lon: 85, child_lat: 50, child_lon: 90, color: "#8B008B", description: "Q Central Asia/S Siberia" },
  { time_kya: 18, parent: "Q", child: "Q-Siberia-early", event_type: "migration", parent_lat: 50, parent_lon: 90, child_lat: 60, child_lon: 100, color: "#8B008B", description: "Q Siberia (15000-18000 BP)" },
  { time_kya: 25, parent: "Q", child: "Q-M242", event_type: "branch", parent_lat: 50, parent_lon: 90, child_lat: 52, child_lon: 95, color: "#8B008B", description: "Q-M242 expansion" },
  { time_kya: 20, parent: "Q-M242", child: "Q-Siberia", event_type: "migration", parent_lat: 52, parent_lon: 95, child_lat: 65, child_lon: 140, color: "#8B008B", description: "Q to NE Siberia" },
  { time_kya: 20, parent: "Q-Siberia", child: "Q1a3a", event_type: "branch", parent_lat: 65, parent_lon: 140, child_lat: 60, child_lon: -165, color: "#9400D3", description: "Q1a3a (Q1a-M3) Beringia" },
  { time_kya: 16, parent: "Q-Siberia", child: "Q-Beringia", event_type: "migration", parent_lat: 65, parent_lon: 140, child_lat: 65, child_lon: -165, color: "#9400D3", description: "Q Beringia standstill" },
  { time_kya: 13.8, parent: "Q-Beringia", child: "Q-M3", event_type: "branch", parent_lat: 65, parent_lon: -165, child_lat: 65, child_lon: -150, color: "#9932CC", description: "Q-M3 emerges" },
  { time_kya: 13, parent: "Q-M3", child: "Q-Alaska", event_type: "migration", parent_lat: 65, parent_lon: -150, child_lat: 60, child_lon: -150, color: "#9932CC", description: "Q-M3 Alaska" },
  { time_kya: 15, parent: "Q-Beringia", child: "Q-M848", event_type: "expansion", parent_lat: 65, parent_lon: -165, child_lat: 60, child_lon: -130, color: "#9932CC", description: "Q-M848 coastal route Americas" },
  { time_kya: 15, parent: "Q-Beringia", child: "Q-Y4276", event_type: "expansion", parent_lat: 65, parent_lon: -165, child_lat: 55, child_lon: -115, color: "#9932CC", description: "Q-Y4276 inland route Americas" },
  { time_kya: 12, parent: "Q-Alaska", child: "Q-NAmerica", event_type: "migration", parent_lat: 60, parent_lon: -150, child_lat: 45, child_lon: -100, color: "#9932CC", description: "Q North America" },
  { time_kya: 11, parent: "Q-NAmerica", child: "Q-CAmerica", event_type: "migration", parent_lat: 45, parent_lon: -100, child_lat: 15, child_lon: -90, color: "#9932CC", description: "Q Central America" },
  { time_kya: 10, parent: "Q-CAmerica", child: "Q-SAmerica", event_type: "migration", parent_lat: 15, parent_lon: -90, child_lat: -15, child_lon: -60, color: "#9932CC", description: "Q South America" },
  { time_kya: 9, parent: "Q-SAmerica", child: "Q-Patagonia", event_type: "migration", parent_lat: -15, parent_lon: -60, child_lat: -45, child_lon: -70, color: "#9932CC", description: "Q to Patagonia" },
  { time_kya: 3, parent: "Q-M848", child: "Q-southam", event_type: "expansion", parent_lat: -10, parent_lon: -70, child_lat: -15, child_lon: -65, color: "#9932CC", description: "Q-M848 South American expansion" },

  // R - Indo-European vector
  { time_kya: 28, parent: "P-M45", child: "R", event_type: "branch", parent_lat: 55, parent_lon: 85, child_lat: 45, child_lon: 70, color: "#000080", description: "R emerges" },
  { time_kya: 25, parent: "R", child: "R1", event_type: "branch", parent_lat: 45, parent_lon: 70, child_lat: 45, child_lon: 65, color: "#000080", description: "R1 branch" },
  { time_kya: 25, parent: "R", child: "R2", event_type: "branch", parent_lat: 45, parent_lon: 70, child_lat: 30, child_lon: 75, color: "#4169E1", description: "R2 to South Asia" },

  // R1a - Eastern Indo-European
  { time_kya: 25, parent: "R1", child: "R1a", event_type: "branch", parent_lat: 45, parent_lon: 65, child_lat: 40, child_lon: 60, color: "#6495ED", description: "R1a diverges" },
  { time_kya: 14, parent: "R1a", child: "R1a1-Ukraine", event_type: "glacial", parent_lat: 40, parent_lon: 60, child_lat: 49, child_lon: 32, color: "#6495ED", description: "R1a1 post-glacial Ukraine" },
  { time_kya: 5.8, parent: "R1a", child: "R1a-M417", event_type: "expansion", parent_lat: 40, parent_lon: 60, child_lat: 48, child_lon: 40, color: "#6495ED", description: "R1a-M417 steppe" },
  { time_kya: 5.8, parent: "R1a", child: "R1a1a1", event_type: "expansion", parent_lat: 50, parent_lon: 60, child_lat: 50, child_lon: 60, color: "#6495ED", description: "R1a1a1-M417 diversification" },
  { time_kya: 5.5, parent: "R1a-M417", child: "R1a-Corded_Ware", event_type: "expansion", parent_lat: 48, parent_lon: 40, child_lat: 52, child_lon: 20, color: "#6495ED", description: "R1a subclades spread with Corded Ware culture" },
  { time_kya: 5, parent: "R1a-M417", child: "R1a-CordedWare", event_type: "expansion", parent_lat: 48, parent_lon: 40, child_lat: 52, child_lon: 20, color: "#4169E1", description: "R1a Corded Ware" },
  { time_kya: 4.5, parent: "R1a-CordedWare", child: "R1a-Scand", event_type: "expansion", parent_lat: 52, parent_lon: 20, child_lat: 60, child_lon: 15, color: "#4169E1", description: "R1a to Scandinavia" },
  { time_kya: 4.5, parent: "R1a1a1", child: "R1a-Z93", event_type: "expansion", parent_lat: 50, parent_lon: 60, child_lat: 45, child_lon: 65, color: "#6495ED", description: "R1a-Z93 Central Asian expansion" },
  { time_kya: 4.5, parent: "R1a-Z93", child: "R1a-Sintashta", event_type: "expansion", parent_lat: 45, parent_lon: 65, child_lat: 50, child_lon: 60, color: "#6495ED", description: "R1a-Z93 Sintashta culture, Indo-Iranian source" },
  { time_kya: 4, parent: "R1a1a1", child: "R1a-Z283", event_type: "expansion", parent_lat: 50, parent_lon: 60, child_lat: 52, child_lon: 20, color: "#6495ED", description: "R1a-Z283 European expansion" },
  { time_kya: 4, parent: "R1a-M417", child: "R1a-Z93-base", event_type: "migration", parent_lat: 48, parent_lon: 40, child_lat: 28, child_lon: 77, color: "#6495ED", description: "R1a-Z93 Indo-Aryan" },
  { time_kya: 3.5, parent: "R1a-Z93", child: "R1a-india", event_type: "migration", parent_lat: 45, parent_lon: 65, child_lat: 30, child_lon: 75, color: "#6495ED", description: "R1a-Z93 into South Asia" },
  { time_kya: 3.2, parent: "R1a-Sintashta", child: "R1a-South_Asia", event_type: "expansion", parent_lat: 50, parent_lon: 60, child_lat: 30, child_lon: 75, color: "#6495ED", description: "Descendants of Sintashta/Andronovo to South Asia" },

  // R1b - Western European dominant
  { time_kya: 25, parent: "R1", child: "R1b", event_type: "branch", parent_lat: 45, parent_lon: 65, child_lat: 38, child_lon: 45, color: "#00008B", description: "R1b diverges" },
  { time_kya: 14, parent: "R1b", child: "R1b-Iberia-refuge", event_type: "glacial", parent_lat: 38, parent_lon: 45, child_lat: 40, child_lon: -3, color: "#00008B", description: "R1b1b2 (R1-M269) post-glacial Iberian refuge" },
  { time_kya: 7, parent: "R1b", child: "R1b-V88", event_type: "branch", parent_lat: 38, parent_lon: 45, child_lat: 30, child_lon: 35, color: "#191970", description: "R1b-V88 branch" },
  { time_kya: 6, parent: "R1b-V88", child: "R1b-Sahara", event_type: "migration", parent_lat: 30, parent_lon: 35, child_lat: 20, child_lon: 15, color: "#191970", description: "R1b-V88 to Sahara" },
  { time_kya: 5.73, parent: "R1b-V88", child: "R-V88", event_type: "origin", parent_lat: 30, parent_lon: 35, child_lat: 15, child_lon: 10, color: "#191970", description: "R-V88 origin" },
  { time_kya: 5.73, parent: "R-V88", child: "R-V88-exp", event_type: "expansion", parent_lat: 15, parent_lon: 10, child_lat: 15, child_lon: 10, color: "#191970", description: "R-V88 rapid expansion Green Sahara" },
  { time_kya: 5, parent: "R1b-Sahara", child: "R1b-Chad", event_type: "migration", parent_lat: 20, parent_lon: 15, child_lat: 12, child_lon: 15, color: "#191970", description: "R1b-V88 Lake Chad" },
  { time_kya: 5, parent: "R1b", child: "R1b-M269", event_type: "expansion", parent_lat: 38, parent_lon: 45, child_lat: 48, child_lon: 35, color: "#000080", description: "R1b-M269 Yamnaya" },
  { time_kya: 4.5, parent: "R1b-M269", child: "R1b-CentralEU", event_type: "expansion", parent_lat: 48, parent_lon: 35, child_lat: 50, child_lon: 10, color: "#000080", description: "R1b Central Europe" },
  { time_kya: 4.2, parent: "R1b-CentralEU", child: "R1b-DF27", event_type: "expansion", parent_lat: 50, parent_lon: 10, child_lat: 42, child_lon: 2, color: "#00008B", description: "R1b-DF27 NE Iberia" },
  { time_kya: 4, parent: "R1b-CentralEU", child: "R1b-P312", event_type: "expansion", parent_lat: 50, parent_lon: 10, child_lat: 48, child_lon: 5, color: "#000080", description: "R1b-P312 Bell Beaker" },
  { time_kya: 3.5, parent: "R1b-P312", child: "R1b-L21", event_type: "expansion", parent_lat: 48, parent_lon: 5, child_lat: 52, child_lon: -5, color: "#00008B", description: "R1b-L21 British Isles" },
  { time_kya: 3, parent: "R1b-P312", child: "R1b-Iberia", event_type: "expansion", parent_lat: 48, parent_lon: 5, child_lat: 40, child_lon: -5, color: "#00008B", description: "R1b to Iberia" },
  { time_kya: 1.5, parent: "R1b-L21", child: "R1b-UiNeill", event_type: "expansion", parent_lat: 52, parent_lon: -5, child_lat: 53.35, child_lon: -6.26, color: "#00008B", description: "R1b1b2 Ui Neill lineage Ireland" },
  { time_kya: 2, parent: "R1b-M269", child: "R1b-M222", event_type: "expansion", parent_lat: 54, parent_lon: -6, child_lat: 54, child_lon: -6, color: "#00008B", description: "R1b-M222 Irish expansion (Gaelic)" },

  // ========== ANCIENT DNA SITES ==========
  { time_kya: 45, parent: "K-M2308", child: "aDNA-UstIshim", event_type: "ancient", parent_lat: 57.8, parent_lon: 70.8, child_lat: 57.8, child_lon: 70.8, color: "#FFD700", description: "Ust-Ishim ancient DNA (45 kya, K-M2308)" },
  { time_kya: 40, parent: "O", child: "aDNA-Tianyuan", event_type: "ancient", parent_lat: 23, parent_lon: 113, child_lat: 39.48, child_lon: 115.58, color: "#FFD700", description: "Tianyuan Cave ancient DNA (39-42 kya)" },
  { time_kya: 3.8, parent: "D1a2a", child: "aDNA-Funadomari", event_type: "ancient", parent_lat: 36, parent_lon: 138, child_lat: 41.5, child_lon: 140.5, color: "#FFD700", description: "Funadomari Jomon DNA (3,800 ya, D1a2a2a)" },
  { time_kya: 3.5, parent: "D1a2a", child: "aDNA-Ikawazu", event_type: "ancient", parent_lat: 36, parent_lon: 138, child_lat: 34.7, child_lon: 137.5, color: "#FFD700", description: "Ikawazu Jomon DNA (3,500 ya, D1a2a)" },
];

// Helper to get events by time range
export function getEventsByTimeRange(startKya: number, endKya: number): MigrationEvent[] {
  return migrationEvents.filter(e => e.time_kya <= startKya && e.time_kya >= endKya);
}

// Helper to get events by haplogroup
export function getEventsByHaplogroup(prefix: string): MigrationEvent[] {
  return migrationEvents.filter(e =>
    e.child.startsWith(prefix) || e.parent.startsWith(prefix)
  );
}

// Get unique haplogroup colors
export function getHaplogroupColors(): Map<string, string> {
  const colors = new Map<string, string>();
  migrationEvents.forEach(e => {
    // Extract main haplogroup letter
    const match = e.child.match(/^([A-Z])/);
    if (match && !colors.has(match[1])) {
      colors.set(match[1], e.color);
    }
  });
  return colors;
}

// Convert migration events to path overlay format
export function convertToPathOverlays() {
  return migrationEvents.map(event => ({
    id: `${event.parent}-${event.child}-${event.time_kya}`,
    coordinates: [
      [event.parent_lon, event.parent_lat] as [number, number],
      [event.child_lon, event.child_lat] as [number, number],
    ],
    label: event.child,
    color: event.color,
    width: event.event_type === 'critical' || event.event_type === 'coastal' ? 3 : 2,
    animated: event.event_type === 'coastal' || event.event_type === 'migration',
    metadata: {
      time_kya: event.time_kya,
      event_type: event.event_type,
      description: event.description,
      parent: event.parent,
    }
  }));
}

// Convert to point markers for endpoints
export function convertToPointMarkers() {
  const uniqueLocations = new Map<string, MigrationEvent>();

  migrationEvents.forEach(event => {
    const key = `${event.child_lat},${event.child_lon}`;
    if (!uniqueLocations.has(key) || event.time_kya > uniqueLocations.get(key)!.time_kya) {
      uniqueLocations.set(key, event);
    }
  });

  return Array.from(uniqueLocations.values()).map(event => ({
    id: event.child,
    coordinates: [event.child_lon, event.child_lat] as [number, number],
    label: event.child,
    color: event.color,
    size: event.event_type === 'critical' || event.event_type === 'origin' ? 10 : 6,
    metadata: {
      time_kya: event.time_kya,
      event_type: event.event_type,
      description: event.description,
    }
  }));
}

// Build parent lookup map (child -> parent)
export function buildParentMap(): Map<string, string> {
  const parentMap = new Map<string, string>();
  migrationEvents.forEach(event => {
    if (!parentMap.has(event.child)) {
      parentMap.set(event.child, event.parent);
    }
  });
  return parentMap;
}

// Get all ancestors of a haplogroup (including itself)
export function getAncestors(haplogroup: string, parentMap: Map<string, string>): Set<string> {
  const ancestors = new Set<string>();
  let current = haplogroup;

  while (current && current !== 'Root') {
    ancestors.add(current);
    const parent = parentMap.get(current);
    if (!parent || ancestors.has(parent)) break; // Prevent infinite loops
    current = parent;
  }
  ancestors.add('Root'); // Always include root

  return ancestors;
}

// Get all descendants of a haplogroup
export function getDescendants(haplogroup: string): Set<string> {
  const descendants = new Set<string>();
  const queue = [haplogroup];

  while (queue.length > 0) {
    const current = queue.shift()!;
    descendants.add(current);

    // Find all children of current
    migrationEvents.forEach(event => {
      if (event.parent === current && !descendants.has(event.child)) {
        queue.push(event.child);
      }
    });
  }

  return descendants;
}

// Get unique terminal/leaf haplogroups (major groups for selection)
export function getMajorHaplogroups(): { id: string; label: string; color: string }[] {
  // Define major haplogroups that users would want to select
  const majorGroups = [
    { id: 'A00', label: 'A00 (Oldest)', color: '#8B0000' },
    { id: 'A0', label: 'A0', color: '#CD5C5C' },
    { id: 'A1', label: 'A1', color: '#DC143C' },
    { id: 'B', label: 'B (African)', color: '#8B4513' },
    { id: 'C', label: 'C (Coastal)', color: '#FF4500' },
    { id: 'D', label: 'D (Asian)', color: '#FFD700' },
    { id: 'E', label: 'E (African/Med)', color: '#8B4513' },
    { id: 'F', label: 'F (Eurasian)', color: '#9370DB' },
    { id: 'G', label: 'G (Neolithic)', color: '#8A2BE2' },
    { id: 'H', label: 'H (S. Asian)', color: '#FF1493' },
    { id: 'I', label: 'I (European HG)', color: '#0000FF' },
    { id: 'J', label: 'J (Middle East)', color: '#20B2AA' },
    { id: 'K', label: 'K', color: '#FFB6C1' },
    { id: 'L', label: 'L (Iranian)', color: '#FFB6C1' },
    { id: 'M', label: 'M (Melanesian)', color: '#9370DB' },
    { id: 'N', label: 'N (Northern)', color: '#32CD32' },
    { id: 'O', label: 'O (E. Asian)', color: '#DC143C' },
    { id: 'P', label: 'P', color: '#000080' },
    { id: 'Q', label: 'Q (American)', color: '#8B008B' },
    { id: 'R', label: 'R (Indo-Euro)', color: '#000080' },
    { id: 'R1a', label: 'R1a (Eastern IE)', color: '#6495ED' },
    { id: 'R1b', label: 'R1b (Western IE)', color: '#00008B' },
    { id: 'R2', label: 'R2 (S. Asian)', color: '#4169E1' },
    { id: 'S', label: 'S (PNG)', color: '#8A2BE2' },
    { id: 'T', label: 'T (Near East)', color: '#FF69B4' },
  ];

  return majorGroups;
}

// Filter events to show ancestry path for selected haplogroups
export function filterEventsForHaplogroups(
  selectedHaplogroups: string[],
  parentMap: Map<string, string>
): MigrationEvent[] {
  if (selectedHaplogroups.length === 0) {
    return migrationEvents;
  }

  // Collect all haplogroups in the ancestry chains
  const relevantHaplogroups = new Set<string>();

  selectedHaplogroups.forEach(haplo => {
    // Add all ancestors
    const ancestors = getAncestors(haplo, parentMap);
    ancestors.forEach(a => relevantHaplogroups.add(a));

    // Add all descendants (so we can see where they went)
    const descendants = getDescendants(haplo);
    descendants.forEach(d => relevantHaplogroups.add(d));
  });

  // Filter events where either parent or child is relevant
  return migrationEvents.filter(event =>
    relevantHaplogroups.has(event.child) || relevantHaplogroups.has(event.parent)
  );
}
