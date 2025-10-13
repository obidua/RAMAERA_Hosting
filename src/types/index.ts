export type UserRole = 'super_admin' | 'admin' | 'customer';
export type AccountStatus = 'active' | 'suspended' | 'pending';
export type ServerStatus = 'active' | 'stopped' | 'suspended' | 'provisioning' | 'error';
export type PlanType = 'general_purpose' | 'cpu_optimized' | 'memory_optimized' | 'storage_optimized';
export type BillingCycle = 'monthly' | 'annual';
export type OrderStatus = 'pending' | 'completed' | 'cancelled' | 'refunded';
export type TicketCategory = 'technical' | 'billing' | 'general' | 'urgent';
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TicketStatus = 'open' | 'in_progress' | 'waiting' | 'resolved' | 'closed';

export interface UserProfile {
  id: string;
  full_name: string;
  company_name?: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  role: UserRole;
  account_status: AccountStatus;
  created_at: string;
  updated_at: string;
}

export interface HostingPlan {
  id: string;
  name: string;
  slug: string;
  description: string;
  plan_type: PlanType;
  vcpu: number;
  ram_gb: number;
  storage_gb: number;
  bandwidth_tb: number;
  monthly_price: number;
  annual_price: number;
  features: string[];
  is_active: boolean;
  is_featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface UserServer {
  id: string;
  user_id: string;
  plan_id: string;
  server_name: string;
  hostname: string;
  ip_address?: string;
  status: ServerStatus;
  os_type: string;
  vcpu: number;
  ram_gb: number;
  storage_gb: number;
  bandwidth_tb: number;
  root_password?: string;
  created_at: string;
  expires_at: string;
  last_reboot?: string;
  plan?: HostingPlan;
}

export interface Order {
  id: string;
  user_id: string;
  order_number: string;
  plan_id: string;
  billing_cycle: BillingCycle;
  amount: number;
  status: OrderStatus;
  payment_method?: string;
  payment_status: string;
  created_at: string;
  completed_at?: string;
  plan?: HostingPlan;
}

export interface Invoice {
  id: string;
  user_id: string;
  order_id?: string;
  invoice_number: string;
  amount: number;
  tax_amount: number;
  total_amount: number;
  status: string;
  due_date: string;
  paid_at?: string;
  items: any[];
  created_at: string;
}

export interface SupportTicket {
  id: string;
  user_id: string;
  ticket_number: string;
  subject: string;
  category: TicketCategory;
  priority: TicketPriority;
  status: TicketStatus;
  assigned_to?: string;
  created_at: string;
  updated_at: string;
  resolved_at?: string;
  user?: UserProfile;
  assigned_user?: UserProfile;
}

export interface TicketMessage {
  id: string;
  ticket_id: string;
  user_id: string;
  message: string;
  is_internal: boolean;
  created_at: string;
  user?: UserProfile;
}
