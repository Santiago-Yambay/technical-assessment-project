variable "resource_group_name" {
  type    = string
  default = "devops-microservice-rg"
}

variable "location" {
  type    = string
  default = "centralus"
}

variable "cluster_name" {
  type    = string
  default = "microservice-cluster"
}

variable "dns_prefix" {
  type    = string
  default = "microservice"
}

variable "subscription_id" {
  type = string
}
