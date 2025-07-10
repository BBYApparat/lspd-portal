"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight, Scale, Search, BookOpen, AlertTriangle, Info } from "lucide-react"

// Criminal Procedure Definitions
const definitions = {
  classifications: {
    "Infraction": "Only fine/Μόνο πρόστιμο",
    "Misdemeanor": "Time & Fine/Φυλάκιση & Πρόστιμο",
    "Felony": "Time & Fine/Φυλάκιση & Πρόστιμο"
  },
  weaponClasses: {
    "Class 1": "Combat Pistol, Vintage Pistol, Pistol, and SNS",
    "Class 2": "Automatic pistols, sub-machine guns & shotguns",
    "Class 3": "Assault rifles",
    "Class 4": "Machine Guns, Snipers, DMRs, RPGs"
  },
  controlledSubstances: ["Cocaine", "Crack-Cocaine", "Oxy", "Marijuana"]
}

// Complete penal code data from the document
const penalCodes = [
  // Title 1: Offenses against persons
  {
    id: 1001,
    section: "§1001",
    title: "Assault & Battery",
    category: "Offenses Against Persons",
    severity: "Misdemeanor",
    description: "Προσβολή ή απειλή χρήσης βίας χωρίς σοβαρό τραυματισμό",
    penalty: "10 months imprisonment and $1,000 fine",
    details: "Physical assault or threat of violence without serious injury"
  },
  {
    id: 1002,
    section: "§1002",
    title: "Kidnapping",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Απαγωγή με χρήση βίας ή εξαναγκασμού",
    penalty: "15 months imprisonment and $1,500 fine",
    details: "Kidnapping using force or coercion"
  },
  {
    id: 1003,
    section: "§1003",
    title: "Unlawful Imprisonment",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Παράνομος εγκλεισμός χωρίς μετακίνηση",
    penalty: "15 months imprisonment and $1,500 fine",
    details: "Unlawful confinement without transportation"
  },
  {
    id: 1004,
    section: "§1004",
    title: "Kidnapping Gov. Employee",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Απαγωγή υπαλλήλου με χρήση βίας",
    penalty: "35 months imprisonment and $3,500 fine",
    details: "Kidnapping of government employee using force"
  },
  {
    id: 1005,
    section: "§1005",
    title: "Assault with Deadly Weapon",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Χρήση θανατηφόρου όπλου σε επίθεση",
    penalty: "15 months imprisonment and $2,000 fine",
    details: "Use of deadly weapon in assault"
  },
  {
    id: 1006,
    section: "§1006",
    title: "Voluntary Manslaughter",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Εκούσιος φόνος",
    penalty: "Held Until Trial",
    details: "Voluntary homicide"
  },
  {
    id: 1007,
    section: "§1007",
    title: "Involuntary Manslaughter",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Ακούσιος φόνος",
    penalty: "Held Until Trial",
    details: "Involuntary homicide"
  },
  {
    id: 1008,
    section: "§1008",
    title: "Attempted 1st Degree Murder",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Απόπειρα προμελετημένου φόνου",
    penalty: "25 months imprisonment and $2,500 fine",
    details: "Attempted premeditated murder"
  },
  {
    id: 1009,
    section: "§1009",
    title: "1st Degree Murder",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Προμελετημένος φόνος",
    penalty: "Held Until Trial",
    details: "Premeditated murder"
  },
  {
    id: 1010,
    section: "§1010",
    title: "Criminal Threats",
    category: "Offenses Against Persons",
    severity: "Misdemeanor",
    description: "Απειλές κατά ατόμου",
    penalty: "5 months imprisonment and $550 fine",
    details: "Threats against a person"
  },
  {
    id: 1012,
    section: "§1012",
    title: "Torture",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Βασανισμός ατόμου",
    penalty: "15 months imprisonment and $1,500 fine",
    details: "Torture of a person"
  },
  {
    id: 1013,
    section: "§1013",
    title: "Murder of Gov. Employee",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Φόνος κυβερνητικού υπαλλήλου",
    penalty: "Held Until Trial",
    details: "Murder of government employee"
  },
  {
    id: 1014,
    section: "§1014",
    title: "Attempted Murder Gov. Employee",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Απόπειρα φόνου κατά κυβερνητικού υπαλλήλου",
    penalty: "20 months imprisonment and $2,000 fine",
    details: "Attempted murder of government employee"
  },
  {
    id: 1015,
    section: "§1015",
    title: "Massive Shootout",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Ένοπλη συμπλοκή πολλών ατόμων",
    penalty: "30 months imprisonment and $2,500 fine",
    details: "Armed conflict involving multiple persons"
  },
  {
    id: 1016,
    section: "§1016",
    title: "Reckless Endangerment",
    category: "Offenses Against Persons",
    severity: "Misdemeanor",
    description: "Αμέλεια με κίνδυνο τραυματισμού",
    penalty: "11 months imprisonment and $1,000 fine",
    details: "Negligence with risk of injury"
  },
  {
    id: 1017,
    section: "§1017",
    title: "FORCER'S LAW",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Κατάχρηση δύναμης",
    penalty: "Held Until Trial",
    details: "Abuse of force"
  },
  {
    id: 1018,
    section: "§1018",
    title: "Police Misconduct",
    category: "Offenses Against Persons",
    severity: "Felony",
    description: "Κατάχρηση εξουσίας από αστυνομία",
    penalty: "Held Until Trial",
    details: "Abuse of power by police"
  },

  // Title 2: Offenses involving theft
  {
    id: 2001,
    section: "§2001",
    title: "Robbery of Financial Institution",
    category: "Theft Offenses",
    severity: "Felony",
    description: "Armed robbery of banks and financial institutions",
    penalty: "35 months imprisonment and $2,000 fine",
    details: "Robbery targeting financial institutions with enhanced penalties"
  },
  {
    id: 2002,
    section: "§2002",
    title: "Robbery of Federal Institution",
    category: "Theft Offenses",
    severity: "Felony",
    description: "Armed robbery of federal government facilities",
    penalty: "45 months imprisonment and $3,000 fine",
    details: "Robbery of federal facilities with maximum penalties"
  },
  {
    id: 2003,
    section: "§2003",
    title: "Robbery of ATM",
    category: "Theft Offenses",
    severity: "Misdemeanor",
    description: "Theft from automated teller machines",
    penalty: "10 months imprisonment and $3,800 fine",
    details: "ATM theft with significant financial penalties"
  },
  {
    id: 2004,
    section: "§2004",
    title: "Gov Vehicle Misuse",
    category: "Theft Offenses",
    severity: "Felony",
    description: "Unauthorized use of government vehicles",
    penalty: "16 months imprisonment and $3,500 fine",
    details: "Misuse of government property vehicles"
  },
  {
    id: 2005,
    section: "§2005",
    title: "Grand Theft Auto",
    category: "Theft Offenses",
    severity: "Felony",
    description: "Theft of motor vehicles",
    penalty: "20 months imprisonment and $2,000 fine",
    details: "Motor vehicle theft with intent to permanently deprive"
  },
  {
    id: 2006,
    section: "§2006",
    title: "Tampering Vehicle",
    category: "Theft Offenses",
    severity: "Misdemeanor",
    description: "Unlawful interference with vehicles",
    penalty: "5 months imprisonment and $350 fine",
    details: "Vehicle tampering without theft intent"
  },
  {
    id: 2007,
    section: "§2007",
    title: "Possession of Stolen Goods",
    category: "Theft Offenses",
    severity: "Felony",
    description: "Knowingly possessing stolen property",
    penalty: "15 months imprisonment and $1,500 fine",
    details: "Possession of property known to be stolen"
  },
  {
    id: 2008,
    section: "§2008",
    title: "Contraband 1st Degree",
    category: "Theft Offenses",
    severity: "Felony",
    description: "Possession of high-level contraband",
    penalty: "20 months imprisonment and $2,000 fine",
    details: "Most serious contraband possession offense"
  },
  {
    id: 2009,
    section: "§2009",
    title: "Contraband 2nd Degree",
    category: "Theft Offenses",
    severity: "Felony",
    description: "Possession of mid-level contraband",
    penalty: "16 months imprisonment and $2,450 fine",
    details: "Mid-level contraband possession"
  },
  {
    id: 2010,
    section: "§2010",
    title: "Contraband 3rd Degree",
    category: "Theft Offenses",
    severity: "Misdemeanor",
    description: "Possession of low-level contraband",
    penalty: "12 months imprisonment and $1,850 fine",
    details: "Lower-level contraband possession"
  },
  {
    id: 2011,
    section: "§2011",
    title: "Store Robbery",
    category: "Theft Offenses",
    severity: "Misdemeanor",
    description: "Robbery of commercial establishments",
    penalty: "15 months imprisonment and $2,000 fine",
    details: "Commercial robbery with moderate penalties"
  },

  // Title 3: Offenses involving fraud
  {
    id: 3001,
    section: "§3001",
    title: "Extortion/Blackmail",
    category: "Fraud Offenses",
    severity: "Felony",
    description: "Obtaining property through threats or coercion",
    penalty: "15 months imprisonment and $2,500 fine",
    details: "Extortion and blackmail schemes"
  },
  {
    id: 3002,
    section: "§3002",
    title: "Fraud",
    category: "Fraud Offenses",
    severity: "Felony",
    description: "Intentional deception for unlawful gain",
    penalty: "30 months imprisonment and $3,500 fine",
    details: "Various forms of fraudulent activity"
  },
  {
    id: 3003,
    section: "§3003",
    title: "Impersonating Gov Employee",
    category: "Fraud Offenses",
    severity: "Felony",
    description: "Falsely representing oneself as government employee",
    penalty: "45 months imprisonment and $5,000 fine",
    details: "Impersonation of government officials"
  },
  {
    id: 3004,
    section: "§3004",
    title: "Identity Theft",
    category: "Fraud Offenses",
    severity: "Misdemeanor",
    description: "Unlawful use of another's personal information",
    penalty: "10 months imprisonment and $350 fine",
    details: "Theft and misuse of personal identity"
  },
  {
    id: 3005,
    section: "§3005",
    title: "Vehicle Registration Plates Fraud",
    category: "Fraud Offenses",
    severity: "Misdemeanor",
    description: "Fraudulent use of vehicle registration plates",
    penalty: "15 months imprisonment and $2,000 fine",
    details: "Illegal modification or use of license plates"
  },
  {
    id: 3006,
    section: "§3006",
    title: "Criminal Impersonation",
    category: "Fraud Offenses",
    severity: "Felony",
    description: "Impersonating another person for unlawful purposes",
    penalty: "15 months imprisonment and $2,000 fine",
    details: "General impersonation for criminal purposes"
  },
  {
    id: 3007,
    section: "§3007",
    title: "Witness Tampering",
    category: "Fraud Offenses",
    severity: "Felony",
    description: "Interfering with witnesses in legal proceedings",
    penalty: "Held Until Trial",
    details: "Intimidation or bribery of witnesses"
  },
  {
    id: 3008,
    section: "§3008",
    title: "Possession of Dirty Money 1st Degree",
    category: "Fraud Offenses",
    severity: "Felony",
    description: "Possession of large amounts of illegally obtained money",
    penalty: "24 months imprisonment and $4,500 fine",
    details: "High-level money laundering possession"
  },
  {
    id: 3009,
    section: "§3009",
    title: "Possession of Dirty Money 2nd Degree",
    category: "Fraud Offenses",
    severity: "Misdemeanor",
    description: "Possession of moderate amounts of illegally obtained money",
    penalty: "12 months imprisonment and $2,000 fine",
    details: "Mid-level money laundering possession"
  },
  {
    id: 3010,
    section: "§3010",
    title: "Money Laundering",
    category: "Fraud Offenses",
    severity: "Felony",
    description: "Concealing the source of illegally obtained money",
    penalty: "30 months imprisonment and $5,000 fine",
    details: "Financial crimes involving money laundering"
  },
  {
    id: 3011,
    section: "§3011",
    title: "Tax Evasion",
    category: "Fraud Offenses",
    severity: "Misdemeanor",
    description: "Failure to pay required taxes",
    penalty: "Fine only - $500",
    details: "Non-payment of required taxes"
  },

  // Title 4: Offenses involving property damage
  {
    id: 4001,
    section: "§4001",
    title: "Burglary",
    category: "Property Damage",
    severity: "Felony",
    description: "Διάρρηξη - Unlawful entry with intent to commit crime",
    penalty: "15 months imprisonment and $1,500 fine",
    details: "Breaking and entering with criminal intent"
  },
  {
    id: 4002,
    section: "§4002",
    title: "Trespass 1st Degree",
    category: "Property Damage",
    severity: "Misdemeanor",
    description: "Unlawful entry onto property",
    penalty: "10 months imprisonment and $400 fine",
    details: "Serious trespassing offense"
  },
  {
    id: 4003,
    section: "§4003",
    title: "Trespass 2nd Degree",
    category: "Property Damage",
    severity: "Misdemeanor",
    description: "Minor unlawful entry onto property",
    penalty: "5 months imprisonment and $250 fine",
    details: "Lesser trespassing offense"
  },
  {
    id: 4004,
    section: "§4004",
    title: "Trespass Government Facility",
    category: "Property Damage",
    severity: "Felony",
    description: "Unlawful entry onto government property",
    penalty: "20 months imprisonment and $2,500 fine",
    details: "Trespassing on government facilities"
  },
  {
    id: 4005,
    section: "§4005",
    title: "Arson",
    category: "Property Damage",
    severity: "Felony",
    description: "Intentionally setting fire to property",
    penalty: "Held Until Trial",
    details: "Deliberately setting fires to structures or property"
  },

  // Title 5: Offenses against public administration
  {
    id: 5001,
    section: "§5001",
    title: "Bribery",
    category: "Public Administration",
    severity: "Felony",
    description: "Δωροδοκία - Offering or accepting bribes",
    penalty: "15 months imprisonment and $1,000 fine",
    details: "Corruption through bribery"
  },
  {
    id: 5002,
    section: "§5002",
    title: "Treason",
    category: "Public Administration",
    severity: "Felony",
    description: "Προδοσία - Betrayal of the state",
    penalty: "Held Until Trial",
    details: "Acts of treason against the state"
  },
  {
    id: 5003,
    section: "§5003",
    title: "Possession of Hacking Tools",
    category: "Public Administration",
    severity: "Misdemeanor",
    description: "Possession of computer hacking equipment",
    penalty: "5 months imprisonment and $400 fine",
    details: "Possession of tools for computer crimes"
  },
  {
    id: 5004,
    section: "§5004",
    title: "Escaping Custody",
    category: "Public Administration",
    severity: "Felony",
    description: "Unlawfully leaving police custody",
    penalty: "10 months imprisonment and $1,500 fine",
    details: "Escape from lawful detention"
  },
  {
    id: 5005,
    section: "§5005",
    title: "Prison Break",
    category: "Public Administration",
    severity: "Felony",
    description: "Escaping from prison facility",
    penalty: "50 months imprisonment and $20,000 fine",
    details: "Escape from correctional facility"
  },
  {
    id: 5006,
    section: "§5006",
    title: "Perjury",
    category: "Public Administration",
    severity: "Felony",
    description: "Lying under oath in legal proceedings",
    penalty: "Held Until Trial",
    details: "False testimony under oath"
  },
  {
    id: 5007,
    section: "§5007",
    title: "Violating Court Order",
    category: "Public Administration",
    severity: "Felony",
    description: "Failure to comply with court mandates",
    penalty: "7 months imprisonment and $5,000 fine",
    details: "Contempt of court orders"
  },
  {
    id: 5008,
    section: "§5008",
    title: "Failure to Appear",
    category: "Public Administration",
    severity: "Felony",
    description: "Not appearing for scheduled court date",
    penalty: "7 months imprisonment and $2,500 fine",
    details: "Failure to appear in court"
  },
  {
    id: 5009,
    section: "§5009",
    title: "Conspiracy",
    category: "Public Administration",
    severity: "Misdemeanor",
    description: "Planning criminal activity with others",
    penalty: "7 months imprisonment and $500 fine",
    details: "Criminal conspiracy charges"
  },
  {
    id: 5010,
    section: "§5010",
    title: "Misuse of 911 System",
    category: "Public Administration",
    severity: "Infraction",
    description: "Inappropriate use of emergency services",
    penalty: "Fine only - $911",
    details: "Misuse of emergency communication system"
  },
  {
    id: 5011,
    section: "§5011",
    title: "Concealing Escaped Prisoner",
    category: "Public Administration",
    severity: "Felony",
    description: "Hiding or assisting escaped prisoners",
    penalty: "Held Until Trial",
    details: "Aiding escaped prisoners"
  },

  // Title 6: Offenses against public order
  {
    id: 6001,
    section: "§6001",
    title: "Massive Shootout",
    category: "Public Order",
    severity: "Felony",
    description: "Large-scale armed confrontation",
    penalty: "30 months imprisonment and $2,500 fine",
    details: "Major public safety threat"
  },
  {
    id: 6002,
    section: "§6002",
    title: "Disobeying a Peace Officer",
    category: "Public Order",
    severity: "Misdemeanor",
    description: "Failure to comply with police orders",
    penalty: "0 months imprisonment and $1,500 fine",
    details: "Non-compliance with lawful police orders"
  },
  {
    id: 6003,
    section: "§6003",
    title: "Disorderly Conduct",
    category: "Public Order",
    severity: "Misdemeanor",
    description: "Disturbing public peace and order",
    penalty: "10 months imprisonment and $1,000 fine",
    details: "Public disturbance and disorder"
  },
  {
    id: 6004,
    section: "§6004",
    title: "Disturbing the Peace",
    category: "Public Order",
    severity: "Misdemeanor",
    description: "Disrupting public tranquility",
    penalty: "10 months imprisonment and $1,000 fine",
    details: "Disruption of public peace"
  },
  {
    id: 6005,
    section: "§6005",
    title: "False Reporting",
    category: "Public Order",
    severity: "Misdemeanor",
    description: "Making false reports to authorities",
    penalty: "10 months imprisonment and $1,000 fine",
    details: "Filing false police reports"
  },
  {
    id: 6006,
    section: "§6006",
    title: "Harassment",
    category: "Public Order",
    severity: "Felony",
    description: "Repeated unwanted contact or behavior",
    penalty: "25 months imprisonment and $5,000 fine",
    details: "Persistent harassment of individuals"
  },
  {
    id: 6007,
    section: "§6007",
    title: "Sexual Harassment",
    category: "Public Order",
    severity: "Felony",
    description: "Unwanted sexual advances or behavior",
    penalty: "25 months imprisonment and $5,000 fine",
    details: "Sexual harassment and misconduct"
  },
  {
    id: 6008,
    section: "§6008",
    title: "Felony Obstruction of Justice",
    category: "Public Order",
    severity: "Felony",
    description: "Serious interference with legal proceedings",
    penalty: "30 months imprisonment and $7,000 fine",
    details: "Major obstruction of justice"
  },
  {
    id: 6009,
    section: "§6009",
    title: "Riot",
    category: "Public Order",
    severity: "Felony",
    description: "Participating in violent public disturbance",
    penalty: "25 months imprisonment and $5,000 fine",
    details: "Participation in riots and civil disorder"
  },
  {
    id: 6010,
    section: "§6010",
    title: "Vandalism",
    category: "Public Order",
    severity: "Felony",
    description: "Destruction or defacement of property",
    penalty: "15 months imprisonment and $1,500 fine",
    details: "Property damage and defacement"
  },
  {
    id: 6011,
    section: "§6011",
    title: "Tampering with Evidence",
    category: "Public Order",
    severity: "Felony",
    description: "Altering or destroying evidence",
    penalty: "15 months imprisonment and $2,000 fine",
    details: "Interference with physical evidence"
  },
  {
    id: 6012,
    section: "§6012",
    title: "Stalking",
    category: "Public Order",
    severity: "Felony",
    description: "Persistent following or surveillance",
    penalty: "10 months imprisonment and $1,500 fine",
    details: "Unlawful stalking behavior"
  },
  {
    id: 6013,
    section: "§6013",
    title: "Domestic Animal Cruelty",
    category: "Public Order",
    severity: "Felony",
    description: "Abuse or neglect of domestic animals",
    penalty: "20 months imprisonment and $4,500 fine",
    details: "Cruelty to domestic animals"
  },
  {
    id: 6014,
    section: "§6014",
    title: "Disruption of Public Utility",
    category: "Public Order",
    severity: "Felony",
    description: "Interference with public utilities",
    penalty: "40 months imprisonment and $10,000 fine",
    details: "Disruption of essential services"
  },
  {
    id: 6015,
    section: "§6015",
    title: "Obstruction of Justice",
    category: "Public Order",
    severity: "Felony",
    description: "Interference with legal proceedings",
    penalty: "9 months imprisonment and $2,500 fine",
    details: "General obstruction of justice"
  },
  {
    id: 6016,
    section: "§6016",
    title: "Use of Mask to Conceal Facial Features",
    category: "Public Order",
    severity: "Infraction",
    description: "Unlawful concealment of identity",
    penalty: "Fine only - $500",
    details: "Illegal use of masks to hide identity"
  },

  // Title 7: Offenses against health and morals
  {
    id: 7001,
    section: "§7001",
    title: "Possession of Crack",
    category: "Health and Morals",
    severity: "Misdemeanor",
    description: "Possession of crack cocaine",
    penalty: "9 months imprisonment and $3,000 fine",
    details: "Possession of crack cocaine for personal use"
  },
  {
    id: 7002,
    section: "§7002",
    title: "Possession of Cocaine",
    category: "Health and Morals",
    severity: "Misdemeanor",
    description: "Possession of cocaine",
    penalty: "10 months imprisonment and $2,500 fine",
    details: "Possession of cocaine for personal use"
  },
  {
    id: 7003,
    section: "§7003",
    title: "Possession of Marijuana",
    category: "Health and Morals",
    severity: "Misdemeanor",
    description: "Possession of marijuana",
    penalty: "5 months imprisonment and $1,500 fine",
    details: "Possession of marijuana for personal use"
  },
  {
    id: 7004,
    section: "§7004",
    title: "Possession of Meth",
    category: "Health and Morals",
    severity: "Misdemeanor",
    description: "Possession of methamphetamine",
    penalty: "10 months imprisonment and $3,500 fine",
    details: "Possession of methamphetamine for personal use"
  },
  {
    id: 7005,
    section: "§7005",
    title: "Sale of Drugs",
    category: "Health and Morals",
    severity: "Felony",
    description: "Sale or distribution of controlled substances",
    penalty: "40 months imprisonment and $5,000 fine",
    details: "Drug dealing and distribution"
  },
  {
    id: 7006,
    section: "§7006",
    title: "Felony Possession of Marijuana",
    category: "Health and Morals",
    severity: "Felony",
    description: "Large quantity marijuana possession",
    penalty: "10 months imprisonment and $3,000 fine",
    details: "Felony-level marijuana possession"
  },
  {
    id: 7007,
    section: "§7007",
    title: "Felony Possession of Cocaine",
    category: "Health and Morals",
    severity: "Felony",
    description: "Large quantity cocaine possession",
    penalty: "15 months imprisonment and $5,000 fine",
    details: "Felony-level cocaine possession"
  },
  {
    id: 7008,
    section: "§7008",
    title: "Felony Possession of Crack",
    category: "Health and Morals",
    severity: "Felony",
    description: "Large quantity crack cocaine possession",
    penalty: "18 months imprisonment and $7,000 fine",
    details: "Felony-level crack cocaine possession"
  },
  {
    id: 7009,
    section: "§7009",
    title: "Felony Possession of Oxy/Meth",
    category: "Health and Morals",
    severity: "Felony",
    description: "Large quantity oxycodone/methamphetamine possession",
    penalty: "18 months imprisonment and $7,000 fine",
    details: "Felony-level oxycodone/methamphetamine possession"
  },
  {
    id: 7010,
    section: "§7010",
    title: "Possession of Drug Paraphernalia",
    category: "Health and Morals",
    severity: "Felony",
    description: "Possession of drug-related equipment",
    penalty: "10 months imprisonment and $1,000 fine",
    details: "Possession of drug paraphernalia"
  },
  {
    id: 7011,
    section: "§7011",
    title: "Cultivation of Marijuana",
    category: "Health and Morals",
    severity: "Felony",
    description: "Growing marijuana plants",
    penalty: "25 months imprisonment and $5,000 fine",
    details: "Illegal cultivation of marijuana"
  },
  {
    id: 7012,
    section: "§7012",
    title: "Public Indecency",
    category: "Health and Morals",
    severity: "Infraction",
    description: "Indecent behavior in public",
    penalty: "Fine only - $1,000",
    details: "Public indecent exposure or behavior"
  },
  {
    id: 7013,
    section: "§7013",
    title: "Desecration of Human Corpse",
    category: "Health and Morals",
    severity: "Felony",
    description: "Unlawful treatment of human remains",
    penalty: "Held Until Trial",
    details: "Desecration of human remains"
  },
  {
    id: 7014,
    section: "§7014",
    title: "Drug Trafficking",
    category: "Health and Morals",
    severity: "Felony",
    description: "Large-scale drug distribution",
    penalty: "Held Until Trial",
    details: "Major drug trafficking operations"
  },
  {
    id: 7015,
    section: "§7015",
    title: "Human Trafficking",
    category: "Health and Morals",
    severity: "Felony",
    description: "Trafficking in human beings",
    penalty: "Held Until Trial",
    details: "Human trafficking and exploitation"
  },
  {
    id: 7016,
    section: "§7016",
    title: "Prostitution",
    category: "Health and Morals",
    severity: "Felony",
    description: "Engaging in or promoting prostitution",
    penalty: "10 months imprisonment and $2,500 fine",
    details: "Prostitution and related activities"
  },
  {
    id: 7017,
    section: "§7017",
    title: "Weed Processing",
    category: "Health and Morals",
    severity: "Felony",
    description: "Processing marijuana for distribution",
    penalty: "20 months imprisonment and $4,500 fine",
    details: "Marijuana processing operations"
  },
  {
    id: 7018,
    section: "§7018",
    title: "Meth Processing",
    category: "Health and Morals",
    severity: "Felony",
    description: "Processing methamphetamine for distribution",
    penalty: "20 months imprisonment and $4,500 fine",
    details: "Methamphetamine processing operations"
  },
  {
    id: 7019,
    section: "§7019",
    title: "Possession of Dried Weed",
    category: "Health and Morals",
    severity: "Misdemeanor",
    description: "Possession of processed marijuana",
    penalty: "9 months imprisonment and $2,000 fine",
    details: "Possession of dried marijuana"
  },
  {
    id: 7020,
    section: "§7020",
    title: "Felony Possession of Dried Weed",
    category: "Health and Morals",
    severity: "Felony",
    description: "Large quantity dried marijuana possession",
    penalty: "30 months imprisonment and $5,000 fine",
    details: "Felony-level dried marijuana possession"
  },

  // Title 8: Offenses against public safety
  {
    id: 8001,
    section: "§8001",
    title: "Criminal Possession of Firearm Class 1",
    category: "Public Safety",
    severity: "Misdemeanor",
    description: "Illegal possession of Class 1 weapons",
    penalty: "12 months imprisonment and $5,000 fine",
    details: "Combat Pistol, Vintage Pistol, Pistol, and SNS"
  },
  {
    id: 8002,
    section: "§8002",
    title: "Criminal Possession of Firearm Class 2",
    category: "Public Safety",
    severity: "Felony",
    description: "Illegal possession of Class 2 weapons",
    penalty: "18 months imprisonment and $10,000 fine",
    details: "Automatic pistols, sub-machine guns & shotguns"
  },
  {
    id: 8003,
    section: "§8003",
    title: "Criminal Possession of Firearm Class 3",
    category: "Public Safety",
    severity: "Felony",
    description: "Illegal possession of Class 3 weapons",
    penalty: "36 months imprisonment and $10,000 fine",
    details: "Assault rifles"
  },
  {
    id: 8004,
    section: "§8004",
    title: "Criminal Possession of Firearm Class 4",
    category: "Public Safety",
    severity: "Felony",
    description: "Illegal possession of Class 4 weapons",
    penalty: "48 months imprisonment and $20,000 fine",
    details: "Machine Guns, Snipers, DMRs, RPGs"
  },
  {
    id: 8005,
    section: "§8005",
    title: "Possession of Explosives",
    category: "Public Safety",
    severity: "Felony",
    description: "Illegal possession of explosive devices",
    penalty: "20 months imprisonment and $10,000 fine",
    details: "Possession of explosive materials"
  },
  {
    id: 8006,
    section: "§8006",
    title: "Criminal Sale of Firearm",
    category: "Public Safety",
    severity: "Felony",
    description: "Illegal sale of firearms",
    penalty: "20 months imprisonment and $8,000 fine",
    details: "Unlawful firearm sales"
  },
  {
    id: 8007,
    section: "§8007",
    title: "Possession of Law Enforcement Firearm",
    category: "Public Safety",
    severity: "Felony",
    description: "Illegal possession of police weapons",
    penalty: "Held Until Trial",
    details: "Possession of law enforcement weapons"
  },
  {
    id: 8008,
    section: "§8008",
    title: "Stockpiling",
    category: "Public Safety",
    severity: "Felony",
    description: "Accumulating large quantities of weapons",
    penalty: "Held Until Trial",
    details: "Stockpiling weapons and ammunition"
  },
  {
    id: 8009,
    section: "§8009",
    title: "Criminal Use of Firearm",
    category: "Public Safety",
    severity: "Felony",
    description: "Using firearms in commission of crime",
    penalty: "25 months imprisonment and $1,500 fine",
    details: "Using firearms during criminal activity"
  },
  {
    id: 8010,
    section: "§8010",
    title: "Criminal Sale of Weapon",
    category: "Public Safety",
    severity: "Felony",
    description: "Illegal sale of weapons",
    penalty: "30 months imprisonment and $18,000 fine",
    details: "Unlawful weapon sales"
  },
  {
    id: 8011,
    section: "§8011",
    title: "Brandishing of Non-Firearm",
    category: "Public Safety",
    severity: "Misdemeanor",
    description: "Threatening display of non-firearm weapons",
    penalty: "5 months imprisonment and $350 fine",
    details: "Brandishing knives, clubs, or other weapons"
  },
  {
    id: 8012,
    section: "§8012",
    title: "Brandishing of Firearm",
    category: "Public Safety",
    severity: "Misdemeanor",
    description: "Threatening display of firearms",
    penalty: "13 months imprisonment and $1,500 fine",
    details: "Brandishing firearms in threatening manner"
  },
  {
    id: 8013,
    section: "§8013",
    title: "Resisting Arrest",
    category: "Public Safety",
    severity: "Misdemeanor",
    description: "Physically resisting lawful arrest",
    penalty: "10 months imprisonment and $550 fine",
    details: "Physical resistance to arrest"
  },
  {
    id: 8014,
    section: "§8014",
    title: "Jaywalking",
    category: "Public Safety",
    severity: "Infraction",
    description: "Crossing street outside designated areas",
    penalty: "Fine only - $150",
    details: "Pedestrian traffic violation"
  },
  {
    id: 8015,
    section: "§8015",
    title: "Terrorism",
    category: "Public Safety",
    severity: "Felony",
    description: "Acts of terrorism",
    penalty: "Held Until Trial",
    details: "Terrorist activities and threats"
  },
  {
    id: 8016,
    section: "§8016",
    title: "Weapons Trafficking",
    category: "Public Safety",
    severity: "Felony",
    description: "Large-scale weapons distribution",
    penalty: "Held Until Trial",
    details: "Major weapons trafficking operations"
  },
  {
    id: 8017,
    section: "§8017",
    title: "Piloting without License",
    category: "Public Safety",
    severity: "Felony",
    description: "Operating aircraft without proper license",
    penalty: "15 months imprisonment and $2,500 fine",
    details: "Unlicensed aircraft operation"
  },
  {
    id: 8018,
    section: "§8018",
    title: "Possession of Weapon Attachments",
    category: "Public Safety",
    severity: "Felony",
    description: "Illegal possession of weapon modifications",
    penalty: "14 months imprisonment and $3,500 fine",
    details: "Possession of weapon attachments and modifications"
  },
  {
    id: 8019,
    section: "§8019",
    title: "Criminal Use of Explosives",
    category: "Public Safety",
    severity: "Felony",
    description: "Using explosives in criminal activity",
    penalty: "Held Until Trial",
    details: "Criminal use of explosive devices"
  },
  {
    id: 8020,
    section: "§8020",
    title: "Possession of Gov Equipment",
    category: "Public Safety",
    severity: "Felony",
    description: "Illegal possession of government equipment",
    penalty: "20 months imprisonment and $8,000 fine",
    details: "Possession of government-issued equipment"
  },
  {
    id: 8021,
    section: "§8021",
    title: "Illegal Manufacturing of Weapons",
    category: "Public Safety",
    severity: "Felony",
    description: "Manufacturing weapons without authorization",
    penalty: "50 months imprisonment and $15,000 fine",
    details: "Unlawful weapon manufacturing"
  },

  // Title 9: Operation of vehicle / citations
  {
    id: 9001,
    section: "§9001",
    title: "Joyriding",
    category: "Vehicle Operation",
    severity: "Misdemeanor",
    description: "Unauthorized use of vehicle without intent to steal",
    penalty: "10 months imprisonment and $1,000 fine",
    details: "Temporary unauthorized use of vehicle"
  },
  {
    id: 9002,
    section: "§9002",
    title: "Driving While Intoxicated",
    category: "Vehicle Operation",
    severity: "Misdemeanor",
    description: "Operating vehicle under influence of alcohol/drugs",
    penalty: "10 months imprisonment and $1,500 fine",
    details: "DUI/DWI violations"
  },
  {
    id: 9003,
    section: "§9003",
    title: "Hit and Run",
    category: "Vehicle Operation",
    severity: "Felony",
    description: "Leaving scene of accident",
    penalty: "25 months imprisonment and $700 fine",
    details: "Leaving accident scene without reporting"
  },
  {
    id: 9004,
    section: "§9004",
    title: "Felony Hit and Run",
    category: "Vehicle Operation",
    severity: "Felony",
    description: "Hit and run causing serious injury or death",
    penalty: "25 months imprisonment and $2,500 fine",
    details: "Hit and run with serious consequences"
  },
  {
    id: 9005,
    section: "§9005",
    title: "Reckless Evading",
    category: "Vehicle Operation",
    severity: "Misdemeanor",
    description: "Reckless driving while evading police",
    penalty: "13 months imprisonment and $800 fine",
    details: "Dangerous evasion of law enforcement"
  },
  {
    id: 9006,
    section: "§9006",
    title: "Evading from Police Vehicle",
    category: "Vehicle Operation",
    severity: "Misdemeanor",
    description: "Fleeing from police vehicle",
    penalty: "10 months imprisonment and $300 fine",
    details: "Evading police pursuit"
  },
  {
    id: 9007,
    section: "§9007",
    title: "Failure to Yield to Emergency Vehicle",
    category: "Vehicle Operation",
    severity: "Infraction",
    description: "Not yielding to emergency vehicles",
    penalty: "Fine only - $500",
    details: "Failure to yield right of way to emergency vehicles"
  },
  {
    id: 9008,
    section: "§9008",
    title: "Negligent Driving",
    category: "Vehicle Operation",
    severity: "Infraction",
    description: "Careless operation of vehicle",
    penalty: "Fine only - $300",
    details: "Negligent vehicle operation"
  },
  {
    id: 9009,
    section: "§9009",
    title: "Reckless Driving",
    category: "Vehicle Operation",
    severity: "Felony",
    description: "Dangerous operation of vehicle",
    penalty: "20 months imprisonment and $1,400 fine",
    details: "Reckless endangerment while driving"
  },
  {
    id: 9010,
    section: "§9010",
    title: "Speeding",
    category: "Vehicle Operation",
    severity: "Infraction",
    description: "Exceeding posted speed limits",
    penalty: "Fine only - $300",
    details: "Speed limit violations"
  },
  {
    id: 9011,
    section: "§9011",
    title: "Riding on Sidewalk",
    category: "Vehicle Operation",
    severity: "Infraction",
    description: "Operating vehicle on sidewalk",
    penalty: "Fine only - $200",
    details: "Illegal sidewalk vehicle operation"
  },
  {
    id: 9012,
    section: "§9012",
    title: "Wrong Side of Road",
    category: "Vehicle Operation",
    severity: "Infraction",
    description: "Driving on wrong side of roadway",
    penalty: "Fine only - $250",
    details: "Wrong-way driving violation"
  },
  {
    id: 9013,
    section: "§9013",
    title: "Unauthorized Parking",
    category: "Vehicle Operation",
    severity: "Infraction",
    description: "Parking in prohibited areas",
    penalty: "Fine only - $150",
    details: "Illegal parking violations"
  },
  {
    id: 9014,
    section: "§9014",
    title: "Failure to Obey Signals",
    category: "Vehicle Operation",
    severity: "Infraction",
    description: "Not following traffic signals",
    penalty: "Fine only - $400",
    details: "Traffic signal violations"
  },
  {
    id: 9015,
    section: "§9015",
    title: "Improper Window Tint",
    category: "Vehicle Operation",
    severity: "Infraction",
    description: "Illegal window tinting",
    penalty: "Fine only - $1,000",
    details: "Window tint violations"
  },
  {
    id: 9016,
    section: "§9016",
    title: "Street Racing",
    category: "Vehicle Operation",
    severity: "Felony",
    description: "Illegal street racing",
    penalty: "25 months imprisonment and $1,000 fine",
    details: "Participating in illegal street races"
  },
  {
    id: 9017,
    section: "§9017",
    title: "Driving Motorcycle Without Helmet",
    category: "Vehicle Operation",
    severity: "Infraction",
    description: "Operating motorcycle without helmet",
    penalty: "Fine only - $400",
    details: "Motorcycle helmet requirement violation"
  },
  {
    id: 9018,
    section: "§9018",
    title: "Operating Unsafe Vehicle",
    category: "Vehicle Operation",
    severity: "Infraction",
    description: "Operating mechanically unsafe vehicle",
    penalty: "Fine only - $400",
    details: "Vehicle safety violations"
  },
  {
    id: 9019,
    section: "§9019",
    title: "Driving Without License/Reg/Ins",
    category: "Vehicle Operation",
    severity: "Infraction",
    description: "Driving without proper documentation",
    penalty: "Fine only - $500",
    details: "Lack of license, registration, or insurance"
  },

  // Title 10: Natural resources
  {
    id: 10001,
    section: "§10001",
    title: "Poaching",
    category: "Natural Resources",
    severity: "Felony",
    description: "Illegal hunting or fishing",
    penalty: "20 months imprisonment and $4,000 fine",
    details: "Illegal hunting, fishing, or trapping"
  },
  {
    id: 10002,
    section: "§10002",
    title: "Hunting Without License",
    category: "Natural Resources",
    severity: "Misdemeanor",
    description: "Hunting without proper permits",
    penalty: "5 months imprisonment and $1,250 fine",
    details: "Unlicensed hunting activities"
  },
  {
    id: 10003,
    section: "§10003",
    title: "Felony Animal Cruelty",
    category: "Natural Resources",
    severity: "Felony",
    description: "Serious abuse of animals",
    penalty: "15 months imprisonment and $2,000 fine",
    details: "Severe animal abuse and cruelty"
  }
]

const categories = [...new Set(penalCodes.map((code) => code.category))]

export default function PenalCodePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [openSections, setOpenSections] = useState<number[]>([])
  const [showDefinitions, setShowDefinitions] = useState(false)

  const filteredCodes = penalCodes.filter((code) => {
    const matchesSearch =
      code.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || code.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const toggleSection = (id: number) => {
    setOpenSections((prev) => (prev.includes(id) ? prev.filter((sectionId) => sectionId !== id) : [...prev, id]))
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Felony":
        return "bg-red-100 text-red-800 border-red-200"
      case "Misdemeanor":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Infraction":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Penal Code Reference</h1>
            <p className="text-xl text-red-100">Comprehensive guide to laws and regulations enforced by the LSPD</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Criminal Procedure Definitions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Criminal Procedure Definitions
              <button
                onClick={() => setShowDefinitions(!showDefinitions)}
                className="ml-auto text-sm text-blue-600 hover:text-blue-800"
              >
                {showDefinitions ? "Hide" : "Show"} Definitions
              </button>
            </CardTitle>
          </CardHeader>
          {showDefinitions && (
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Classifications:</h4>
                  <ul className="space-y-2">
                    {Object.entries(definitions.classifications).map(([key, value]) => (
                      <li key={key} className="flex justify-between">
                        <span className="font-medium">{key}:</span>
                        <span className="text-sm text-gray-600">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Weapon Classes:</h4>
                  <ul className="space-y-2">
                    {Object.entries(definitions.weaponClasses).map(([key, value]) => (
                      <li key={key} className="text-sm">
                        <span className="font-medium">{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Controlled Substances:</h4>
                  <p className="text-sm text-gray-600">{definitions.controlledSubstances.join(", ")}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Key Terms:</h4>
                  <ul className="space-y-1 text-sm">
                    <li><span className="font-medium">Accessory:</span> Generally not present at the actual crime</li>
                    <li><span className="font-medium">Accomplice:</span> Present at the actual crime</li>
                    <li><span className="font-medium">HUT:</span> Held Until Trial</li>
                    <li><span className="font-medium">Attempted:</span> Same time and fine as related charge</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Penal Code
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by section, title, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Penal Code Sections */}
        <div className="space-y-4">
          {filteredCodes.map((code) => (
            <Card key={code.id} className="overflow-hidden">
              <Collapsible open={openSections.includes(code.id)} onOpenChange={() => toggleSection(code.id)}>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-left">
                        <Badge variant="outline" className="font-mono">
                          {code.section}
                        </Badge>
                        <div>
                          <CardTitle className="text-lg">{code.title}</CardTitle>
                          <CardDescription>{code.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`${getSeverityColor(code.severity)} border`}>
                          {code.severity}
                        </Badge>
                        {openSections.includes(code.id) ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Category</h4>
                        <Badge variant="outline" className="mb-4">
                          {code.category}
                        </Badge>

                        <h4 className="font-semibold mb-2">Penalty</h4>
                        <p className="text-sm text-gray-600 mb-4">{code.penalty}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Additional Details</h4>
                        <p className="text-sm text-gray-600">{code.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {filteredCodes.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No penal code sections found matching your search criteria.</p>
            </CardContent>
          </Card>
        )}

        {/* Legal Disclaimer */}
        <Card className="mt-12 bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Legal Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-700 text-sm">
              This penal code reference is provided for educational and training purposes only. It contains the complete
              criminal procedure definitions and all offense categories from Titles 1-10. This is a comprehensive reference
              including weapon classifications, controlled substances, and penalty structures. Always consult current legal
              statutes and department policies for official guidance. Laws and penalties may vary and are subject to change.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}